(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The component is fully configurable.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("authorization")]),t._v(" "),a("td",[t._v("The client token generated from the server")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("em",[t._v("required")])])]),t._v(" "),a("tr",[a("td",[t._v("paypal")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#paypal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure PayPal"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("paypalCredit")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#paypal-credit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure PayPal Credit"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("venmo")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#venmo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure Venmo"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("applePay")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#apple-pay",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure Apple Pay"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("googlePay")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#google-pay",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configure Google Pay"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("locale")]),t._v(" "),a("td",[t._v("The desired locale ("),a("a",{attrs:{href:"https://github.com/braintree/braintree-web-drop-in/tree/master/src/translations"}},[t._v("available locales")]),t._v(")")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("en_US")])])]),t._v(" "),a("tr",[a("td",[t._v("translations")]),t._v(" "),a("td",[t._v("Custom translations. See the default translations for "),a("a",{attrs:{href:"https://github.com/braintree/braintree-web-drop-in/blob/master/src/translations/en_US.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("a full list of translation strings"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("btnText")]),t._v(" "),a("td",[t._v("The button text")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'Pay'")])]),t._v(" "),a("tr",[a("td",[t._v("btnClass")]),t._v(" "),a("td",[t._v("The button class")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'btn btn-primary'")])]),t._v(" "),a("tr",[a("td",[t._v("vaultManager")]),t._v(" "),a("td",[t._v("If you authorize Drop-in using client tokens generated with customer_ids, you can also enable customers to remove saved payment methods from their Vault records.")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("threeDSecure")]),t._v(" "),a("td",[t._v("To enable 3DS. "),a("strong",[t._v("You must generate a client token if you want to use 3D Secure (3DS). Tokenization keys can't be used to verify 3D Secure enabled cards.")]),t._v(".")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("threeDSecureParameters")]),t._v(" "),a("td",[t._v("The client informations when 3DS is enabled.")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("null")])])])]),t._v(" "),a("h2",{attrs:{id:"enable-3d-secure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-3d-secure"}},[t._v("#")]),t._v(" Enable 3D Secure")]),t._v(" "),a("p",[t._v("Enable threeDSecure on the component and add the required parameters.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You must generate a client token if you want to use 3D Secure (3DS). Tokenization keys can't be used to verify 3D Secure enabled cards.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<v-braintree\n    authorization=\"xxxxxxxxxxxxxxxxxx\"\n    :three-d-secure=\"true\"\n    :three-d-secure-parameters=\"{\n        amount: 100, \n        email: 'francois@witify.io', \n        billingAddress: {\n            givenName: 'John',\n            surname: 'Doe',\n            phoneNumber: '515 515 1234',\n            streetAddress: '485 boul. dagenais E',\n            extendedAddress: '1',\n            locality: 'Laval',\n            region: 'QC',\n            postalCode: 'h7m5z5',\n            countryCodeAlpha2: 'CA'\n        }\n    }\"\n>\n</v-braintree>\n")])])]),a("h2",{attrs:{id:"replace-the-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-the-button"}},[t._v("#")]),t._v(" Replace the button")]),t._v(" "),a("p",[t._v("The submit button is in a scoped slot, so you can replace it with any other component as necessary. For example, using a Vuetify button:")]),t._v(" "),a("div",{staticClass:"language-Vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-braintree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("authorization")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxxxxxxxxxxxxxxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("slotProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-btn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("slotProps.submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Fancy button"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("v-btn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("v-braintree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);