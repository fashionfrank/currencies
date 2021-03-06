/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/*
 * Currency tools
 *
 * Copyright (c) 2011 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */ 

if (typeof Currency === 'undefined') {
  var Currency = {};
}

Currency.cookie = {
  configuration: {
    expires: 365,
    path: '/',
    domain: window.location.hostname
  },
  name: 'currency',
  write: function(currency) {
    jQuery.cookie(this.name, currency, this.configuration);
  },
  read: function() {
    return jQuery.cookie(this.name);
  },
  destroy: function() {
    jQuery.cookie(this.name, null, this.configuration);
  }
};

Currency.money_with_currency_format = {
    "CAD": "${{amount}} CAD",
    "HKD": "HK${{amount}}",
    "ZAR": "R {{amount}} ZAR",
    "OMR": "{{amount_with_comma_separator}} OMR",
    "TRY": "{{amount}}TL YTL",
    "XCD": "EC${{amount}}",
    "JMD": "${{amount}} JMD",
    "RUB": "\u0026#1088;\u0026#1091;\u0026#1073;{{amount_with_comma_separator}} RUB",
    "KZT": "{{amount}} KZT",
    "KES": "KSh{{amount}}",
    "PEN": "S/. {{amount}} PEN",
    "SEK": "{{amount_no_decimals}} kr SEK",
    "THB": "{{amount}} \u0026#xe3f; THB",
    "CZK": "{{amount_with_comma_separator}} K\u0026#269;",
    "UAH": "\u20b4{{amount}} UAH",
    "DKK": "kr.{{amount_with_comma_separator}}",
    "BHD": "{{amount}}0 BHD",
    "UYU": "${{amount_with_comma_separator}} UYU",
    "INR": "Rs.{{amount}}",
    "ISK": "{{amount_with_comma_separator}} kr ISK",
    "COP": "${{amount_with_comma_separator}} COP",
    "CNY": "\u0026#165;{{amount}} CNY",
    "GBP": "\u0026pound;{{amount}} GBP",
    "BGN": "{{amount}} \u043b\u0432 BGN",
    "AUD": "${{amount}} AUD",
    "ILS": "{{amount}} NIS",
    "EUR": "\u0026euro;{{amount}} EUR",
    "TWD": "${{amount}} TWD",
    "BRL": "R$ {{amount_with_comma_separator}} BRL",
    "NZD": "${{amount}} NZD",
    "EEK": "{{amount_with_comma_separator}} EEK",
    "BSD": "BS${{amount}} BSD",
    "PLN": "{{amount_with_comma_separator}} zl PLN",
    "CHF": "SFr. {{amount}} CHF",
    "FJD": "FJ${{amount}}",
    "KRW": "\u0026#8361;{{amount_no_decimals}} KRW",
    "IDR": "Rp. {{amount}}",
    "QAR": "QAR {{amount_with_comma_separator}}",
    "TZS": "{{amount}} TZS",
    "NOK": "kr {{amount_with_comma_separator}} NOK",
    "JPY": "\u0026#165;{{amount_no_decimals}} JPY",
    "MYR": "RM{{amount}} MYR",
    "SAR": "{{amount}} SAR",
    "PHP": "\u0026#8369;{{amount}} PHP",
    "SGD": "${{amount}} SGD",
    "HRK": "{{amount_with_comma_separator}} kn HRK",
    "ARS": "${{amount_with_comma_separator}} ARS",
    "VEB": "Bs. {{amount_with_comma_separator}} VEB",
    "HUF": "{{amount_no_decimals}} Ft",
    "KWD": "{{amount}}0 KWD",
    "AED": "Dhs. {{amount}} AED",
    "SYP": "S\u0026pound;{{amount}} SYP",
    "CLP": "${{amount_no_decimals}} CLP",
    "LVL": "Ls {{amount}} LVL",
    "GTQ": "{{amount}} GTQ",
    "LTL": "{{amount}} Lt",
    "TTD": "${{amount}} TTD",
    "USD": "${{amount}} USD",
    "MXN": "$ {{amount}} MXN",
    "RON": "{{amount_with_comma_separator}} lei RON",
    "LKR": "Rs {{amount}} LKR",
    "JOD": "{{amount}}0 JOD",
    "NGN": "\u0026#8358;{{amount}} NGN",
    "CRC": "\u0026#8353; {{amount_with_comma_separator}} CRC"
}

Currency.money_format = {
    "CAD": "${{amount}}",
    "HKD": "${{amount}}",
    "ZAR": "R {{amount}}",
    "OMR": "{{amount_with_comma_separator}} OMR",
    "TRY": "{{amount}}TL",
    "XCD": "${{amount}}",
    "JMD": "${{amount}}",
    "RUB": "\u0026#1088;\u0026#1091;\u0026#1073; {{amount_with_comma_separator}}",
    "KZT": "{{amount}} KZT",
    "KES": "KSh{{amount}}",
    "PEN": "S/. {{amount}}",
    "SEK": "{{amount_no_decimals}} kr",
    "THB": "{{amount}} \u0026#xe3f;",
    "CZK": "{{amount_with_comma_separator}} K\u0026#269;",
    "UAH": "\u20b4{{amount}}",
    "DKK": "{{amount_with_comma_separator}}",
    "BHD": "{{amount}}0 BD",
    "UYU": "${{amount_with_comma_separator}}",
    "INR": "{{amount}}",
    "ISK": "{{amount_with_comma_separator}} kr",
    "COP": "${{amount_with_comma_separator}}",
    "CNY": "\u0026#165;{{amount}}",
    "GBP": "\u0026pound;{{amount}}",
    "BGN": "{{amount}} \u043b\u0432",
    "AUD": "${{amount}}",
    "ILS": "{{amount}} NIS",
    "EUR": "\u0026euro;{{amount}}",
    "TWD": "${{amount}}",
    "BRL": "R$ {{amount_with_comma_separator}}",
    "NZD": "${{amount}}",
    "EEK": "{{amount_with_comma_separator}}",
    "BSD": "BS${{amount}}",
    "PLN": "{{amount_with_comma_separator}} zl",
    "CHF": "SFr. {{amount}}",
    "FJD": "${{amount}}",
    "KRW": "\u0026#8361;{{amount_no_decimals}}",
    "IDR": "{{amount}}",
    "QAR": "QAR {{amount_with_comma_separator}}",
    "TZS": "{{amount}} TZS",
    "NOK": "kr {{amount_with_comma_separator}}",
    "JPY": "\u0026#165;{{amount_no_decimals}}",
    "MYR": "RM{{amount}} MYR",
    "SAR": "{{amount}} SR",
    "PHP": "\u0026#8369;{{amount}}",
    "SGD": "${{amount}}",
    "HRK": "{{amount_with_comma_separator}} kn",
    "ARS": "${{amount_with_comma_separator}}",
    "VEB": "Bs. {{amount_with_comma_separator}}",
    "HUF": "{{amount_no_decimals}}",
    "KWD": "{{amount}}0 KD",
    "AED": "Dhs. {{amount}}",
    "SYP": "S\u0026pound;{{amount}}",
    "CLP": "${{amount_no_decimals}}",
    "LVL": "Ls {{amount}}",
    "GTQ": "Q{{amount}}",
    "LTL": "{{amount}} Lt",
    "TTD": "${{amount}}",
    "USD": "${{amount}}",
    "MXN": "$ {{amount}}",
    "RON": "{{amount_with_comma_separator}} lei",
    "LKR": "Rs {{amount}}",
    "JOD": "{{amount}}0 JD",
    "NGN": "\u0026#8358;{{amount}}",
    "CRC": "\u0026#8353; {{amount_with_comma_separator}}"
};

Currency.formatMoney = function(cents, format) {
  var value = '';
  var patt = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);
  switch(formatString.match(patt)[1]) {
  case 'amount':
    value = floatToString(cents/100.0, 2).replace(/(\d+)(\d{3}[\.,]?)/,'$1,$2');
    break;
  case 'amount_no_decimals':
    value = floatToString(cents/100.0, 0).replace(/(\d+)(\d{3}[\.,]?)/,'$1,$2');
    break;
  case 'amount_with_comma_separator':
    value = floatToString(cents/100.0, 2).replace(/\./, ',').replace(/(\d+)(\d{3}[\.,]?)/,'$1.$2');
    break;
  }    
  return formatString.replace(patt, value);
};

function floatToString(numeric, decimals) {
  var amount = numeric.toFixed(decimals).toString();
  if(amount.match(/^\.\d+/)) { return "0"+amount; }
  else { return amount; }
}

Currency.currentCurrency = '';
Currency.format = 'money_with_currency_format';

Currency.convertAll = function(oldCurrency, newCurrency, selector, format) {
  jQuery(selector || '.money').each(function() {
    var cents = 0.0;
    var oldFormat = Currency[format || Currency.format][oldCurrency] || '{{amount}}';
    var newFormat = Currency[format || Currency.format][newCurrency] || '{{amount}}';
    if (oldFormat.indexOf('{{amount_no_decimals}}') !== -1) {
      cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)*100, oldCurrency, newCurrency);
    }
    else { 
      cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), oldCurrency, newCurrency);
    }
    jQuery(this).html(Currency.formatMoney(cents, newFormat));
  });
  this.currentCurrency = newCurrency;
  this.cookie.write(newCurrency);
};