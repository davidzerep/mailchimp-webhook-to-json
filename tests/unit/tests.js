'use strict'

const bodyToJSON = require('../../index');
const assert = require('assert');

describe("my function", () => {
    it("with unsubscribe webhook", () => {
        const body = 'type=unsubscribe&fired_at=2020-06-23+19%3A59%3A36&data%5Baction%5D=unsub&data%5Breason%5D=manual&data%5Bid%5D=zz000z00z0&data%5Bemail%5D=myuser%40mydomain.com&data%5Bemail_type%5D=html&data%5Bip_opt%5D=265.265.265.265&data%5Bweb_id%5D=000000000&data%5Bcampaign_id%5D=zzzzzzzzzz&data%5Bmerges%5D%5BEMAIL%5D=myuser%40mydomain.com&data%5Bmerges%5D%5BFNAME%5D=john&data%5Bmerges%5D%5BLNAME%5D=doe&data%5Bmerges%5D%5BADDRESS%5D=&data%5Bmerges%5D%5BPHONE%5D=&data%5Blist_id%5D=zzzzzzzzzz';

        const expected = {
            "type": 'unsubscribe',
            "fired_at": '2020-06-23 19:59:36',
            "data": {
                "action": 'unsub',
                "reason": 'manual',
                "id": 'zz000z00z0',
                "email": 'myuser@mydomain.com',
                "email_type": 'html',
                "ip_opt": '265.265.265.265',
                "web_id": '000000000',
                "campaign_id": 'zzzzzzzzzz',
                "merges": {
                    "EMAIL": 'myuser@mydomain.com',
                    "FNAME": 'john',
                    "LNAME": 'doe',
                    "ADDRESS": '',
                    "PHONE": ''
                },
                "list_id": 'zzzzzzzzzz'
            }
        };

        let result = bodyToJSON(body);

        assert.deepStrictEqual(result, expected);
    });
});
