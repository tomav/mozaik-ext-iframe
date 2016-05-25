# Mozaïk iframe widgets

[![Travis CI](https://img.shields.io/travis/tomav/mozaik-ext-iframe.svg?style=flat-square)](https://travis-ci.org/tomav/mozaik-ext-iframe)
[![NPM version](https://img.shields.io/npm/v/mozaik-ext-iframe.svg?style=flat-square)](https://www.npmjs.com/package/mozaik-ext-iframe)

## Iframe

![iframe](https://raw.githubusercontent.com/tomav/mozaik-ext-iframe/master/preview/iframe.iframe.png)

### parameters

key        | required | description
-----------|----------|----------------------------------------------------
`title`    | no       | *Title of the widget*
`url`      | yes      | *iFrame URL*

### usage

```javascript
{
  type: 'iframe.iframe',
  url: 'http://myurl.com/page.html',
  columns: 1, rows: 1, x: 0, y: 0
}
```
