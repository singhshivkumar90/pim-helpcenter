const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const defaultCollectionName = 'announcements';

exports.announcements = functions.region('europe-west1').https.onRequest(async (request, response) => {
    if (request.query.pim_edition === undefined) {
        response.status(400).send('Missing "pim_edition" query parameter.');

        return;
    }

    if (request.query.limit === undefined) {
        response.status(400).send('Missing "limit" query parameter.');

        return;
    }

    // Allow to request on another collection for the tests
    const collectionName = request.query.collection_name === undefined ? defaultCollectionName : request.query.collection_name;
    const collection = admin.firestore().collection(collectionName);

    let query = collection
        .where('editions', 'array-contains', request.query.pim_edition)
        .orderBy('startDate', 'desc')
        .orderBy('filename', 'asc')
        .limit(request.query.limit);

        if (request.query.search_after !== undefined) {
            const searchAfterDoc = await collection.doc(request.query.search_after).get();
            if (searchAfterDoc.exists) {
                query = query.startAfter(searchAfterDoc);
            } else {
                response.status(400).send('Search after document does not exist.');

                return;
            }
        }

        query
            .get()
            .then(snapshot => {
                const announcements = [];

                snapshot.forEach(doc => {
                    announcements.push({
                        'id': doc.data().id,
                        "title": doc.data().title,
                        'startDate': doc.data().startDate,
                        'description': doc.data().description,
                        'img': doc.data().img,
                        'imgAlt': doc.data().imgAlt,
                        'notificationDuration': doc.data().notificationDuration,
                        'tags': doc.data().tags,
                        'link': doc.data().link,
                    });
                });

            response.status(200).send({'data': announcements});
            return;
        })
        .catch(err => {
            console.log(err);
            response.status(500).send('An error occurred when fetching data.');
            console.error('An error occurred when fetching data.', err);
        });
});
