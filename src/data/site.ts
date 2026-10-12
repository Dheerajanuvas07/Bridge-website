// Every business fact the site shows lives here. Change a value once and it updates everywhere.
// Anything still unconfirmed is rendered with the <Ph> component, highlighted, until it's filled.

export const site = {
  name: 'Bridge',
  url: 'https://www.bridgelincoln.com',
  phone: '815-995-0115',
  phoneHref: 'tel:+18159950115',
  smsHref: 'sms:+18159950115',
  email: 'hello@bridgeinfo.com',
  cities: ['Lincoln', 'Omaha'],
  areaLabel: 'Lincoln and Omaha, Nebraska',
  price: { standard: 149, extended: 199, hours: 2 },
  responseTime: 'within 24 hours',
  tally: {
    request: 'Zj4QNa',
    referral: 'aQbl6E',
    captain: 'QK6N9Y',
  },
} as const;
