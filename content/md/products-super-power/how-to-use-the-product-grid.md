---
id: products-grid
themes: products-super-power
title: Get familiar with the **product grid**
popular: true
ee-only: false
related: manage-your-views, what-is-a-product, what-is-a-category, what-is-a-channel, what-is-a-locale
---

# Where is the product grid?

To access your products: click on the main menu (Products). You will land on the product grid.

This page contains all information you need to start working on your catalog: your products, your categories, some filters, your scopes and locales.

![image](../img/dummy.png)

In the following sections, we will see how to set up your work environment.

# Locale & channel context

## Select a locale context

By default, you will find all your products on the product grid page. You can choose your working locale, if several locales have been activated. The locale selection will impact the following information on the page:
- The category labels (on the left panel),
- The attribute labels that can be used as filters (on the filters section in the left panel),
- The labels of attribute groups,
- The attribute option labels used as values (on the product grid),
- The completeness displayed (its percentage in the «Complete» grid column),
- The product or attribute values in the product grid.

The locale selected in the dropdown menu is your working locale. Every time it will be changed, product information will be updated in the product grid.

![image](../img/dummy.png)

::: info
  1. The locales displayed are those added to at least one channel. If you do not see your working locale, it is more likely that you do not have the appropriate access rights to view or edit products for this working locale (Enterprise version). In this case, then please contact your administrator. Or the locale is not required by any channel, therefore it is not activated. To add a locale to a channel, please refer to “Manage channels” in the PIM Catalog Settings Guide.  
  2. The working locale selected on the product grid’s page is also applied when you edit or view a product form.  
  3. The working locale is different from the user interface locale of the user
:::

## Select a channel context

On the left side of the grid, you have a drop down menu to select your channel.

![image](../img/dummy.png)

The selected channel or scope will be your working channel (or working scope). Selecting a channel impacts values displayed on the product grid, especially if your attribute information differ depending on the channel.

This will also impact the completeness displayed, since there can be one completeness percentage per channel/locale combination. Therefore the product grid is updated whenever the working channel changes.

::: info
The available channels are those concerned with the locale selected higher up on the page. If you don’t find your channel, it means the locale selected is not required for the channel you want, so it is not proposed. To add a locale to a channel, refer to “Manage channels” section in the PIM Catalog Settings Guide.

Like the locale, the channel selected on the product grid’s page is applied when editing a product form.
:::

# Product grid pagination

The product grid displays 25 products per page. To browse product’s pages, click on the number of the page you want to reach.

![image](../img/dummy.png)

![image](../img/dummy.png)

# Category panel

## Browse products’ categories

On the left side of the page, you will see the category panel. Thanks to this panel, you can easily navigate between category trees or between categories. It displays all categories you have access to.

In the Enterprise Edition, you can define specific rights on categories and category trees. Thus, if you do not see a specific tree or category, it’s because you have not the permission to see it. Click on a category name to expand it or to display its products in the grid.

![image](../img/dummy.png)

Click on the higher dropdown menu to select another category tree, «Master Catalog» in our screenshot above.

![image](../img/dummy.png)

## View unclassified products

Below the category tree, you will see an additional category: «Unclassified products». Click on this category to see all unclassified products. this category is added automatically by the PIM and cannot be removed or edited.

![image](../img/dummy.png)

Remember that unclassified products are not exported.

## View all products

Click on «All products» to see all products (categorised and uncategorised) of the selected category tree.

![image](../img/dummy.png)

## Product counter

Akeneo displays you the number of products available in each category and category tree. You will see a number into brackets nearby each category, this figure represents the total number of products classified in this category or sub-category.

At the bottom of the category tree, you will see a Yes/No option: «Include sub-categories».

![image](../img/dummy.png)

This option takes into account the number of products classified in sub-categories. By default, this option is set to “Yes”, hence subcategories are included. If you do not want to take into account products classified in subcategories, select ”No”. The tree will be then updated accordingly.

::: ee
In the Enterprise Edition, only the products on which you have rights to view and publish are counted. The other products are not taken into account.
:::

## Hide or expand the category panel

In order to allow you to display the product grid widely, you can hide the category panel. To do so, click on the left arrow on the bottom right corner of the panel:

![image](../img/dummy.png)

The category panel will be reduced automatically to the left side.

To expand the panel, click again on the arrow, the panel will be displayed.

![image](../img/dummy.png)

![image](../img/dummy.png)

# Customise the grid

## Use filters

The product grid includes a filter management. By default, the PIM displays System attributes (Family, Groups...):

![image](../img/dummy.png)

You can use the filters displayed or add new filters: click on the ”+” icon and select the new attributes you want to use as filters. The new filters will appear in the left panel. You can now filter your products displayed in the grid.

If an attribute or an attribute option is not translated in the active locale, its code will be displayed into brackets like [name] and only the attributes having the property «usable as grid filter» enabled are available to be used as filters.

The filters can be applied on the following product information:
- Product information managed by the PIM: Family, Groups, Status, Complete, Creation date, Updated date, product identifier, Permissions.
- Product information managed via the attributes.

::: tips
You can define your own default product grid filters in your user account, refer to the section “Change your default preferences”.

If no default filters are set in your user account, the PIM will use the system attributes as default product grid filters: family, groups, status, complete, complete product, creation date, updated date, product identifier and permissions.
:::

::: info
If you are missing an attribute in the Filters menu check if it is well activated as «usable as grid filter».
:::

::: ee
Only the attributes that you can view or edit are available in the list of filters on the product grid.
:::

## Configure grid columns

Now you’re set up with your filters, you can select which columns you would like to see in the grid. By default, Akeneo displays the System attributes as columns.

By default, the grid displays the following columns:
- ID (our product identifier),
- Label (the product’s display name in Akeneo),
- Family,
- Status (Enabled/Disabled),
- Complete (the completeness percentage),
- Created at (the creation date of the product),
- Updated at (the product last updated date),
- Groups (if the product belongs to groups)
- Complete product

### Configure the columns
Click on «columns» on the right side of the grid to display the column selection window:

![image](../img/dummy.png)

On the left side of the window, you will see your attribute groups.

Nearby each group, you will see the number of attributes belonging to this group that can be used as columns in the grid. Click on a group to display its attributes in the middle column.

If you want to display all attributes, click on «All groups». On the right side, you will see your current grid’s columns.

::: info
Like for filters, only attributes having the property «usable as grid filter» activated can be used as columns.

And like for categories and locales, if you are an Enterprise Edition client and if you cannot see an attribute this is more likely that you do not have the permission to view it.
:::


### Add attributes as columns

Select an attribute group on the left side or select «All groups». Drag your attribute in the mid-column and drop it in the right column. Use the search tool to look for a specific attribute. Move your attribute up and down to reorder them.

### Remove attributes as columns

Click on «Clear» top of the screen to remove all current grid’s attributes, or use the “trash” icon to remove a specific attribute from the grid. You need to have at least one attribute as a column.

Click on «Apply» to save your changes. Your customised grid will be displayed.

## Sort values within the grid

You can also sort on some columns headers, for instance you can sort products on sku, family, status, complete, created and updated at and on some other attributes (text, text area, number, simple select attributes).

You can not sort values on price, media, asset, metric, multiselect attributes and on Label and Groups system attributes. To check if you can sort on a column simply hover your mouse over the column’s header.

# Action shortcuts on single products

There is a set of actions available for each product. They are available on the right side of the product grid when you mouse over the product’s line:

![image](../img/dummy.png)

Depending on your Akeneo version (Enterprise or Community) and your rights, you might not see all these shortcut actions: edit the product information, edit its category/ies, delete it or change its status.

You will be then able to edit the product information by clicking on the small pencil icon, edit its categories by clicking on the small folder icon, delete it with the trash bin icon and change its status thanks to the 2 arrows icon.

::: info
The shortcut actions are displayed if you have the appropriate rights, or as if you are working with the Enterprise Edition or the Community Version of the Akeneo PIM
:::