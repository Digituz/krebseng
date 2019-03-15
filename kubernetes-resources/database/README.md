Create database and create user:

```bash
k exec mongo-594c4bdcc7-9ggcc -- mongo --host mongodb://mg-db-user:d1g1tuz45BK@localhost/ --eval "db.getSiblingDB('digituz').createUser({user: 'mg-db-user', pwd: 'd1g1tuz45BK', roles: ['readWrite']}, {w: 'majority', wtimeout: 5000});"
```

Insert documents:

```bash
k exec mongo-594c4bdcc7-9ggcc -- mongo --host mongodb://mg-db-user:d1g1tuz45BK@localhost/digituz --eval 'db.buildings.insert({
    "id": 15,
    "title": "Villaggio Sorrento",
    "path": "villagio-sorrento",
    "address": "Rua Domingos Crescêncio, 965",
    "neighbout": "Bairro Higienópolis",
    "completionDate": "02/2007",
    "pictures": [
        {
            "name": "20110120120116.jpg",
            "spacesName": "20110120120116.jpg",
            "type": "image/jpeg",
            "size": 48054,
            "lastModified": 1528551817359,
            "lastModifiedDate": "2018-06-09T13:43:37.359Z",
            "uploaded": true
        },
        {
            "name": "20110111175915.jpg",
            "spacesName": "20110111175915.jpg",
            "type": "image/jpeg",
            "size": 98580,
            "lastModified": 1528551817359,
            "lastModifiedDate": "2018-06-09T13:43:37.359Z",
            "uploaded": true
        },
        {
            "name": "20110111175912.jpg",
            "spacesName": "20110111175912.jpg",
            "type": "image/jpeg",
            "size": 151785,
            "lastModified": 1528551817358,
            "lastModifiedDate": "2018-06-09T13:43:37.358Z",
            "uploaded": true
        },
        {
            "name": "20110111175907.jpg",
            "spacesName": "20110111175907.jpg",
            "type": "image/jpeg",
            "size": 85987,
            "lastModified": 1528551817357,
            "lastModifiedDate": "2018-06-09T13:43:37.357Z",
            "uploaded": true
        },
        {
            "name": "20110111175854.jpg",
            "spacesName": "20110111175854.jpg",
            "type": "image/jpeg",
            "size": 114217,
            "lastModified": 1528551817356,
            "lastModifiedDate": "2018-06-09T13:43:37.356Z",
            "uploaded": true
        }
    ],
    "descriptiveMemorial": [
        {
            "name": "memorial.pdf",
            "spacesName": "memorial.pdf",
            "type": "application/pdf",
            "size": 35111,
            "lastModified": 1528551817360,
            "lastModifiedDate": "2018-06-09T13:43:37.360Z",
            "uploaded": true
        }
    ],
    "neighborhood": "Santana",
    "folder": [
        {
            "name": "volante villaggio sorrento_frente.jpg",
            "spacesName": "volante villaggio sorrento_frente.jpg",
            "type": "image/jpeg",
            "size": 327524,
            "lastModified": 1531870923083,
            "lastModifiedDate": "2018-07-17T23:42:03.083Z",
            "uploaded": true
        }
    ],
    "mainPicture": [
        {
            "name": "20140416173752.jpg",
            "spacesName": "20140416173752.jpg",
            "type": "image/jpeg",
            "size": 264497,
            "lastModified": 1531871483814,
            "lastModifiedDate": "2018-07-17T23:51:23.814Z",
            "uploaded": true
        }
    ],
    "completeDate": "2014-01-15T02:00:00.000Z",
    "date": "2014-01-01T02:00:00.000Z"
})'

k exec mongo-594c4bdcc7-9ggcc -- mongo --host mongodb://mg-db-user:d1g1tuz45BK@localhost/digituz --eval 'db.buildings.insert({
    "title": "Villa Ravenna",
    "path": "villa-ravenna",
    "address": "Rua São Simão 99",
    "neighborhood": "Bom Jesus",
    "pictures": [
        {
            "name": "20140416181232.jpg",
            "spacesName": "20140416181232.jpg",
            "type": "image/jpeg",
            "size": 125093,
            "lastModified": 1528551817419,
            "lastModifiedDate": "2018-06-09T13:43:37.419Z",
            "uploaded": true
        },
        {
            "name": "20140416181226.jpg",
            "spacesName": "20140416181226.jpg",
            "type": "image/jpeg",
            "size": 119879,
            "lastModified": 1528551817418,
            "lastModifiedDate": "2018-06-09T13:43:37.418Z",
            "uploaded": true
        },
        {
            "name": "20140416181215.jpg",
            "spacesName": "20140416181215.jpg",
            "type": "image/jpeg",
            "size": 178367,
            "lastModified": 1528551817417,
            "lastModifiedDate": "2018-06-09T13:43:37.417Z",
            "uploaded": true
        },
        {
            "name": "20140416181208.jpg",
            "spacesName": "20140416181208.jpg",
            "type": "image/jpeg",
            "size": 185285,
            "lastModified": 1528551817416,
            "lastModifiedDate": "2018-06-09T13:43:37.416Z",
            "uploaded": true
        },
        {
            "name": "20140416181200.jpg",
            "spacesName": "20140416181200.jpg",
            "type": "image/jpeg",
            "size": 129486,
            "lastModified": 1528551817415,
            "lastModifiedDate": "2018-06-09T13:43:37.415Z",
            "uploaded": true
        },
        {
            "name": "20140416181152.jpg",
            "spacesName": "20140416181152.jpg",
            "type": "image/jpeg",
            "size": 76210,
            "lastModified": 1528551817414,
            "lastModifiedDate": "2018-06-09T13:43:37.414Z",
            "uploaded": true
        },
        {
            "name": "20140416181144.jpg",
            "spacesName": "20140416181144.jpg",
            "type": "image/jpeg",
            "size": 88347,
            "lastModified": 1528551817413,
            "lastModifiedDate": "2018-06-09T13:43:37.413Z",
            "uploaded": true
        }
    ],
    "folder": [
        {
            "name": "folder.jpg",
            "spacesName": "folder.jpg",
            "type": "image/jpeg",
            "size": 200107,
            "lastModified": 1528551817412,
            "lastModifiedDate": "2018-06-09T13:43:37.412Z",
            "uploaded": true
        }
    ],
    "descriptiveMemorial": [
        {
            "name": "memorial.pdf",
            "spacesName": "memorial.pdf",
            "type": "application/pdf",
            "size": 85097,
            "lastModified": 1528551817420,
            "lastModifiedDate": "2018-06-09T13:43:37.420Z",
            "uploaded": true
        }
    ],
    "mainPicture": [
        {
            "name": "folder.jpg",
            "spacesName": "folder.jpg",
            "type": "image/jpeg",
            "size": 200107,
            "lastModified": 1528551817412,
            "lastModifiedDate": "2018-06-09T13:43:37.412Z",
            "uploaded": true
        }
    ],
    "date": "2016-01-01T02:00:00.000Z"
})'

k exec mongo-594c4bdcc7-9ggcc -- mongo --host mongodb://mg-db-user:d1g1tuz45BK@localhost/digituz --eval 'db.buildings.insert({
"title": "Villa Dei Fiori",
"path": "villa-dei-fiori",
"address": "Rua Cândido Silveira 160",
"neighborhood": "Auxiliadora",
"mainPicture": [
    {
        "name": "Candido Silveira.jpg",
        "spacesName": "Candido Silveira.jpg",
        "type": "image/jpeg",
        "size": 726662,
        "lastModified": 1532345840562,
        "lastModifiedDate": "2018-07-23T11:37:20.562Z",
        "uploaded": true
    }
],
"pictures": [
    {
        "name": "tipo2.jpg",
        "spacesName": "tipo2.jpg",
        "type": "image/jpeg",
        "size": 203063,
        "lastModified": 1532345837595,
        "lastModifiedDate": "2018-07-23T11:37:17.595Z",
        "uploaded": true
    },
    {
        "name": "tipo1.jpg",
        "spacesName": "tipo1.jpg",
        "type": "image/jpeg",
        "size": 197279,
        "lastModified": 1532345836070,
        "lastModifiedDate": "2018-07-23T11:37:16.070Z",
        "uploaded": true
    },
    {
        "name": "térreo.jpg",
        "spacesName": "térreo.jpg",
        "type": "image/jpeg",
        "size": 156526,
        "lastModified": 1532345834439,
        "lastModifiedDate": "2018-07-23T11:37:14.439Z",
        "uploaded": true
    },
    {
        "name": "subsolo.jpg",
        "spacesName": "subsolo.jpg",
        "type": "image/jpeg",
        "size": 128684,
        "lastModified": 1532345833100,
        "lastModifiedDate": "2018-07-23T11:37:13.100Z",
        "uploaded": true
    },
    {
        "name": "apto 1503.jpg",
        "spacesName": "apto 1503.jpg",
        "type": "image/jpeg",
        "size": 118776,
        "lastModified": 1532345825713,
        "lastModifiedDate": "2018-07-23T11:37:05.713Z",
        "uploaded": true
    },
    {
        "name": "apto 1502.jpg",
        "spacesName": "apto 1502.jpg",
        "type": "image/jpeg",
        "size": 120491,
        "lastModified": 1532345823993,
        "lastModifiedDate": "2018-07-23T11:37:03.993Z",
        "uploaded": true
    },
    {
        "name": "apto 1501.jpg",
        "spacesName": "apto 1501.jpg",
        "type": "image/jpeg",
        "size": 126929,
        "lastModified": 1532345822592,
        "lastModifiedDate": "2018-07-23T11:37:02.592Z",
        "uploaded": true
    },
    {
        "name": "apto 301.jpg",
        "spacesName": "apto 301.jpg",
        "type": "image/jpeg",
        "size": 158301,
        "lastModified": 1532345820993,
        "lastModifiedDate": "2018-07-23T11:37:00.993Z",
        "uploaded": true
    },
    {
        "name": "2º pvto.jpg",
        "spacesName": "2º pvto.jpg",
        "type": "image/jpeg",
        "size": 231741,
        "lastModified": 1532345820012,
        "lastModifiedDate": "2018-07-23T11:37:00.012Z",
        "uploaded": true
    }
],
"folder": [
    {
        "name": "CAPA SITE.jpg",
        "spacesName": "CAPA SITE.jpg",
        "type": "image/jpeg",
        "size": 139466,
        "lastModified": 1532345817655,
        "lastModifiedDate": "2018-07-23T11:36:57.655Z",
        "uploaded": true
    }
],
"descriptiveMemorial": [
    {
        "name": "Memorial Descritivo CS.pdf",
        "spacesName": "Memorial Descritivo CS.pdf",
        "type": "application/pdf",
        "size": 286928,
        "lastModified": 1532345847619,
        "lastModifiedDate": "2018-07-23T11:37:27.619Z",
        "uploaded": true
    }
]
})'
```

Show all documents:

```bash
k exec mongo-594c4bdcc7-9ggcc -- mongo --host mongodb://mg-db-user:d1g1tuz45BK@localhost/digituz --eval "db.buildings.find({})"
```
