# Google script shortcut functions


These functions are shortcut of generally used functions.

## `Page(pageName)`
Gets active spreadsheets given name sheet. 

Returns Spreadsheet object.


## `getConfig(range)`
I usually save config data a sheet named `_config` 

This function gets config data.

Returns object

```

{
"key": "value
}

```


## `getColAsRow(range)`

Gets given one column range to one row data.

Returns values array.

```
[
["data", "data", ....]
]
```


## `addDataToPage(data, pageName)`

Add a row to given page.


## `showMessage(message)`

UI alerts new message.
