document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

window.startApp          = require('appkit/tests/helpers/start_app');
window.isolatedContainer = require('appkit/tests/helpers/isolated_container');

function exists(selector) {
  return !!find(selector).length;
}

// function equal(actual, expected, message) {
//   message = message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
//   QUnit.equal.call(this, expected, actual, message);
// }

window.exists = exists;
// window.equal = equal;

// github API fixture data
window.someData = [
  {
    "id": "1844648354",
    "type": "WatchEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 13002763,
      "name": "machty/ember-falling-bricks",
      "url": "https://api.github.com/repos/machty/ember-falling-bricks"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2013-09-30T16:57:24Z"
  },
  {
    "id": "1842904501",
    "type": "WatchEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 10592731,
      "name": "fullstackio/choc-explore",
      "url": "https://api.github.com/repos/fullstackio/choc-explore"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2013-09-27T18:34:33Z",
    "org": {
      "id": 4064333,
      "login": "fullstackio",
      "gravatar_id": "d31ecc437168b65584c45e5e3b88a715",
      "url": "https://api.github.com/orgs/fullstackio",
      "avatar_url": "https://2.gravatar.com/avatar/d31ecc437168b65584c45e5e3b88a715?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1842894448",
    "type": "WatchEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 10592707,
      "name": "fullstackio/choc",
      "url": "https://api.github.com/repos/fullstackio/choc"
    },
    "payload": {
      "action": "started"
    },
    "public": true,
    "created_at": "2013-09-27T18:24:50Z",
    "org": {
      "id": 4064333,
      "login": "fullstackio",
      "gravatar_id": "d31ecc437168b65584c45e5e3b88a715",
      "url": "https://api.github.com/orgs/fullstackio",
      "avatar_url": "https://2.gravatar.com/avatar/d31ecc437168b65584c45e5e3b88a715?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1824222956",
    "type": "IssuesEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 3016562,
      "name": "emberjs/data",
      "url": "https://api.github.com/repos/emberjs/data"
    },
    "payload": {
      "action": "opened",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/data/issues/1237",
        "labels_url": "https://api.github.com/repos/emberjs/data/issues/1237/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/data/issues/1237/comments",
        "events_url": "https://api.github.com/repos/emberjs/data/issues/1237/events",
        "html_url": "https://github.com/emberjs/data/issues/1237",
        "id": 19138064,
        "number": 1237,
        "title": "Failing test: fixture adapter does not generate ids properly",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 0,
        "created_at": "2013-09-07T04:25:50Z",
        "updated_at": "2013-09-07T04:25:50Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "I can try to fix, but I'm late, here's what I got:\r\n\r\npaste the test below into: \r\n`/packages/ember-data/tests/integration/adapter/fixture_adapter_test.js`\r\nand both assertions will fail.\r\n\r\nThis seems particulrly important cause in the Todo list getting started tutorial, console will log:\r\n`Assertion failed: The id 0 has already been used with another record of type (subclass of DS.Model).` \r\neven though the UI seems to work right, visually.\r\n\r\n```javascript\r\ntest(\"should generate ids starting higher than provided to FIXTURES\", function() {\r\n  Person.FIXTURES = [{\r\n    id: 0,\r\n    firstName: \"Erik\",\r\n    lastName: \"Trom\",\r\n  }];\r\n\r\n  equal(Person.FIXTURES.length, 1, \"Fixtures has one record\");\r\n\r\n  var paul = env.store.createRecord('person', {firstName: 'Paul', lastName: 'Chavard', height: 70});\r\n  paul.save();\r\n\r\n  equal(Person.FIXTURES.length, 2, \"Fixtures has two records\");\r\n\r\n  env.store.find('person', 1).then(async(function() {\r\n    ok(false, \"nope, paul's not here\");\r\n  }), function() {\r\n    ok(true, \"paul won't be attending the person party\");\r\n  });\r\n});\r\n```"
      }
    },
    "public": true,
    "created_at": "2013-09-07T04:25:51Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1824135401",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 9123897,
      "name": "billysbilling/ember-animated-outlet",
      "url": "https://api.github.com/repos/billysbilling/ember-animated-outlet"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/22",
        "labels_url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/22/labels{/name}",
        "comments_url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/22/comments",
        "events_url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/22/events",
        "html_url": "https://github.com/billysbilling/ember-animated-outlet/issues/22",
        "id": 19133561,
        "number": 22,
        "title": "port to ember1.0",
        "user": {
          "login": "ghedamat",
          "id": 220183,
          "avatar_url": "https://1.gravatar.com/avatar/237c681a2c9ba59f22f124cd6e7eeea1?d=https%3A%2F%2Fidenticons.github.com%2Fcc02a3fa7291a6b183d62efca719ffbd.png",
          "gravatar_id": "237c681a2c9ba59f22f124cd6e7eeea1",
          "url": "https://api.github.com/users/ghedamat",
          "html_url": "https://github.com/ghedamat",
          "followers_url": "https://api.github.com/users/ghedamat/followers",
          "following_url": "https://api.github.com/users/ghedamat/following{/other_user}",
          "gists_url": "https://api.github.com/users/ghedamat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ghedamat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ghedamat/subscriptions",
          "organizations_url": "https://api.github.com/users/ghedamat/orgs",
          "repos_url": "https://api.github.com/users/ghedamat/repos",
          "events_url": "https://api.github.com/users/ghedamat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ghedamat/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 1,
        "created_at": "2013-09-06T23:24:05Z",
        "updated_at": "2013-09-06T23:33:58Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "Hi all,\r\n\r\nI recently ported a simple app where I'm using ember animated outlet to 1.0\r\n\r\nI've encountered some small problems as the {{link-to}} behavior changed with the last releases.\r\n\r\nAs I've been able to get the animated outlet working again in my app with few changes I'm currently working on porting the whole plugin to 1.0 altogether, \r\n\r\nIf you agree I'll likely open a PR as soon as I'm at a decent state and ask for some feedback..\r\n\r\nA lot of the changes are minor tweaks to the tests, but I would love some input :)\r\n\r\nThanks!\r\n\r\n"
      },
      "comment": {
        "url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/comments/23975965",
        "html_url": "https://github.com/billysbilling/ember-animated-outlet/issues/22#issuecomment-23975965",
        "issue_url": "https://api.github.com/repos/billysbilling/ember-animated-outlet/issues/22",
        "id": 23975965,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-09-06T23:33:58Z",
        "updated_at": "2013-09-06T23:33:58Z",
        "body": "I think this is a great idea."
      }
    },
    "public": true,
    "created_at": "2013-09-06T23:33:58Z",
    "org": {
      "id": 2702076,
      "login": "billysbilling",
      "gravatar_id": "e64522d2e24dcaec695e309ccb7d0d29",
      "url": "https://api.github.com/orgs/billysbilling",
      "avatar_url": "https://2.gravatar.com/avatar/e64522d2e24dcaec695e309ccb7d0d29?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818822602",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/704",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/704/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/704/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/704/events",
        "html_url": "https://github.com/emberjs/website/issues/704",
        "id": 18828482,
        "number": 704,
        "title": "Contributing to the getting started guide",
        "user": {
          "login": "trek",
          "id": 9736,
          "avatar_url": "https://1.gravatar.com/avatar/1764a8db261a619b1a8e35c9498c0edf?d=https%3A%2F%2Fidenticons.github.com%2Ffac05328668f599efe18e76cdb284aab.png",
          "gravatar_id": "1764a8db261a619b1a8e35c9498c0edf",
          "url": "https://api.github.com/users/trek",
          "html_url": "https://github.com/trek",
          "followers_url": "https://api.github.com/users/trek/followers",
          "following_url": "https://api.github.com/users/trek/following{/other_user}",
          "gists_url": "https://api.github.com/users/trek/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trek/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trek/subscriptions",
          "organizations_url": "https://api.github.com/users/trek/orgs",
          "repos_url": "https://api.github.com/users/trek/repos",
          "events_url": "https://api.github.com/users/trek/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trek/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 3,
        "created_at": "2013-08-31T21:09:59Z",
        "updated_at": "2013-08-31T21:25:36Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/704",
          "diff_url": "https://github.com/emberjs/website/pull/704.diff",
          "patch_url": "https://github.com/emberjs/website/pull/704.patch"
        },
        "body": ""
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23614248",
        "html_url": "https://github.com/emberjs/website/issues/704#issuecomment-23614248",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/704",
        "id": 23614248,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-31T21:25:35Z",
        "updated_at": "2013-08-31T21:25:35Z",
        "body": "err, hour?\n\n- Erik"
      }
    },
    "public": true,
    "created_at": "2013-08-31T21:25:36Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818820892",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/704",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/704/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/704/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/704/events",
        "html_url": "https://github.com/emberjs/website/issues/704",
        "id": 18828482,
        "number": 704,
        "title": "Contributing to the getting started guide",
        "user": {
          "login": "trek",
          "id": 9736,
          "avatar_url": "https://2.gravatar.com/avatar/1764a8db261a619b1a8e35c9498c0edf?d=https%3A%2F%2Fidenticons.github.com%2Ffac05328668f599efe18e76cdb284aab.png",
          "gravatar_id": "1764a8db261a619b1a8e35c9498c0edf",
          "url": "https://api.github.com/users/trek",
          "html_url": "https://github.com/trek",
          "followers_url": "https://api.github.com/users/trek/followers",
          "following_url": "https://api.github.com/users/trek/following{/other_user}",
          "gists_url": "https://api.github.com/users/trek/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trek/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trek/subscriptions",
          "organizations_url": "https://api.github.com/users/trek/orgs",
          "repos_url": "https://api.github.com/users/trek/repos",
          "events_url": "https://api.github.com/users/trek/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trek/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 2,
        "created_at": "2013-08-31T21:09:59Z",
        "updated_at": "2013-08-31T21:19:09Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/704",
          "diff_url": "https://github.com/emberjs/website/pull/704.diff",
          "patch_url": "https://github.com/emberjs/website/pull/704.patch"
        },
        "body": ""
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23614151",
        "html_url": "https://github.com/emberjs/website/issues/704#issuecomment-23614151",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/704",
        "id": 23614151,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-31T21:19:09Z",
        "updated_at": "2013-08-31T21:19:09Z",
        "body": "@trek, what's ya'lls due date for 1.0? \n\n- Erik"
      }
    },
    "public": true,
    "created_at": "2013-08-31T21:19:10Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818820215",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/696",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/696/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/696/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/696/events",
        "html_url": "https://github.com/emberjs/website/issues/696",
        "id": 18821302,
        "number": 696,
        "title": "- Cookbook Recipe \"Loading Data from a server\" updated to match Recipe guidelines",
        "user": {
          "login": "mavilein",
          "id": 2470881,
          "avatar_url": "https://0.gravatar.com/avatar/0f09cb2c03eec9673fd67b3eee105a00?d=https%3A%2F%2Fidenticons.github.com%2Fabd9d02a3cfc9ec46854968dd85f8bf5.png",
          "gravatar_id": "0f09cb2c03eec9673fd67b3eee105a00",
          "url": "https://api.github.com/users/mavilein",
          "html_url": "https://github.com/mavilein",
          "followers_url": "https://api.github.com/users/mavilein/followers",
          "following_url": "https://api.github.com/users/mavilein/following{/other_user}",
          "gists_url": "https://api.github.com/users/mavilein/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mavilein/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mavilein/subscriptions",
          "organizations_url": "https://api.github.com/users/mavilein/orgs",
          "repos_url": "https://api.github.com/users/mavilein/repos",
          "events_url": "https://api.github.com/users/mavilein/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mavilein/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 7,
        "created_at": "2013-08-31T10:50:57Z",
        "updated_at": "2013-08-31T21:16:19Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/696",
          "diff_url": "https://github.com/emberjs/website/pull/696.diff",
          "patch_url": "https://github.com/emberjs/website/pull/696.patch"
        },
        "body": "I moved the discussion part into the solution and omitted a discussion, since i have nothing interesting to write about it."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23614098",
        "html_url": "https://github.com/emberjs/website/issues/696#issuecomment-23614098",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/696",
        "id": 23614098,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-31T21:16:19Z",
        "updated_at": "2013-08-31T21:16:19Z",
        "body": "I did wonder about that, sorry! On a phone...\n\n- Erik"
      }
    },
    "public": true,
    "created_at": "2013-08-31T21:16:19Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818810157",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/696",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/696/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/696/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/696/events",
        "html_url": "https://github.com/emberjs/website/issues/696",
        "id": 18821302,
        "number": 696,
        "title": "- Cookbook Recipe \"Loading Data from a server\" updated to match Recipe guidelines",
        "user": {
          "login": "mavilein",
          "id": 2470881,
          "avatar_url": "https://2.gravatar.com/avatar/0f09cb2c03eec9673fd67b3eee105a00?d=https%3A%2F%2Fidenticons.github.com%2Fabd9d02a3cfc9ec46854968dd85f8bf5.png",
          "gravatar_id": "0f09cb2c03eec9673fd67b3eee105a00",
          "url": "https://api.github.com/users/mavilein",
          "html_url": "https://github.com/mavilein",
          "followers_url": "https://api.github.com/users/mavilein/followers",
          "following_url": "https://api.github.com/users/mavilein/following{/other_user}",
          "gists_url": "https://api.github.com/users/mavilein/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mavilein/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mavilein/subscriptions",
          "organizations_url": "https://api.github.com/users/mavilein/orgs",
          "repos_url": "https://api.github.com/users/mavilein/repos",
          "events_url": "https://api.github.com/users/mavilein/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mavilein/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 3,
        "created_at": "2013-08-31T10:50:57Z",
        "updated_at": "2013-08-31T20:37:19Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/696",
          "diff_url": "https://github.com/emberjs/website/pull/696.diff",
          "patch_url": "https://github.com/emberjs/website/pull/696.patch"
        },
        "body": "I moved the discussion part into the solution and omitted a discussion, since i have nothing interesting to write about it."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23613479",
        "html_url": "https://github.com/emberjs/website/issues/696#issuecomment-23613479",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/696",
        "id": 23613479,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-31T20:37:19Z",
        "updated_at": "2013-08-31T20:37:19Z",
        "body": "@mehulkar <https://github.com/mehulkar> I agree, a recipe using plain\r\njquery Ajax would be nice, u mind throwing one together, it would\r\ncompliment this ember data one nicely.  That said, perhaps the title could\r\nuse ember-data instead of just data, but minor...\r\n\r\nOn Saturday, August 31, 2013, Mehul Kar wrote:\r\n\r\n> Also, looks like there is some discussion about Ember.ajax going on right\r\n> now emberjs/ember.js#3261<https://github.com/emberjs/ember.js/issues/3261>\r\n>\r\n> —\r\n> Reply to this email directly or view it on GitHub<https://github.com/emberjs/website/pull/696#issuecomment-23613419>\r\n> .\r\n>"
      }
    },
    "public": true,
    "created_at": "2013-08-31T20:37:19Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818786302",
    "type": "CommitCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 12005356,
      "name": "bmac/ember.js",
      "url": "https://api.github.com/repos/bmac/ember.js"
    },
    "payload": {
      "comment": {
        "url": "https://api.github.com/repos/bmac/ember.js/comments/3989109",
        "html_url": "https://github.com/bmac/ember.js/commit/dd7efb2169aec549049ff14daa4b27eb71f8fe8b#commitcomment-3989109",
        "id": 3989109,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "position": null,
        "line": null,
        "path": null,
        "commit_id": "dd7efb2169aec549049ff14daa4b27eb71f8fe8b",
        "created_at": "2013-08-31T19:04:31Z",
        "updated_at": "2013-08-31T19:04:31Z",
        "body": "Dude your docs are awesome. Keep up the good work."
      }
    },
    "public": true,
    "created_at": "2013-08-31T19:04:31Z"
  },
  {
    "id": "1818400244",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://2.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 55,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-30T20:34:22Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [x] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [x] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [x] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md) (@mavilein)\r\n\r\n### Event Handling and Data Binding\r\n- [x] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md) (@mavilein)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md) (@fabriciotav)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md) (@ahazem)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md) (@cdmweb)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [x] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md) (@mavilein)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [x] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md) (@stevekane)\r\n\r\n### Helpers and Components\r\n- [x] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n- [x] Creating a Handlebars Helper to Truncate Text (@cavneb)\r\n- [x] Creating Reusable Social Share Buttons (@cavneb)\r\n- [x] Converting Strings to Currency With Accounting.js (@cdmwebs)\r\n\r\n### Working With Objects\r\n- [x] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md) (@twokul)\r\n- [x] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [x] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md) (@GavinJoyce)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md) (@twokul)\r\n\r\n### Debugging and Configuration\r\n- [x] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md) (@twokul)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23587555",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23587555",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23587555,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T20:34:22Z",
        "updated_at": "2013-08-30T20:34:22Z",
        "body": "Which web socket library would one use if one did have such an inclination? Not necessarily me, just anyone who wants to try before they buy...\r\n\r\n- Erik"
      }
    },
    "public": true,
    "created_at": "2013-08-30T20:34:22Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818338695",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://0.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 49,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-30T19:17:17Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [x] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [x] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [x] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md) (@mavilein)\r\n\r\n### Event Handling and Data Binding\r\n- [x] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md) (@mavilein)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md) (@fabriciotav)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md) (@ahazem)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md) (@cdmweb)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [x] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md) (@mavilein)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [x] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md) (@stevekane)\r\n\r\n### Helpers and Components\r\n- [x] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n- [x] Creating a Handlebars Helper to Truncate Text (@cavneb)\r\n- [x] Creating Reusable Social Share Buttons (@cavneb)\r\n- [x] Converting Strings to Currency With Accounting.js (@cdmwebs)\r\n\r\n### Working With Objects\r\n- [x] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md) (@twokul)\r\n- [x] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [x] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md) (@GavinJoyce)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md) (@twokul)\r\n\r\n### Debugging and Configuration\r\n- [x] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md) (@twokul)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23583474",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23583474",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23583474,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T19:17:17Z",
        "updated_at": "2013-08-30T19:17:17Z",
        "body": "Looks like no one has taken \"Setting The Attributes of a Component's Element\" - I'll dig into it after lunch"
      }
    },
    "public": true,
    "created_at": "2013-08-30T19:17:17Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818316274",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/678",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/678/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/678/events",
        "html_url": "https://github.com/emberjs/website/issues/678",
        "id": 18785796,
        "number": 678,
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "closed",
        "assignee": null,
        "milestone": null,
        "comments": 6,
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T18:50:45Z",
        "closed_at": "2013-08-30T18:46:00Z",
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/678",
          "diff_url": "https://github.com/emberjs/website/pull/678.diff",
          "patch_url": "https://github.com/emberjs/website/pull/678.patch"
        },
        "body": "https://github.com/emberjs/website/issues/663"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23581897",
        "html_url": "https://github.com/emberjs/website/issues/678#issuecomment-23581897",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/678",
        "id": 23581897,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T18:50:45Z",
        "updated_at": "2013-08-30T18:50:45Z",
        "body": "@cavneb "
      }
    },
    "public": true,
    "created_at": "2013-08-30T18:50:46Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818315945",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/678",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/678/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/678/events",
        "html_url": "https://github.com/emberjs/website/issues/678",
        "id": 18785796,
        "number": 678,
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "closed",
        "assignee": null,
        "milestone": null,
        "comments": 5,
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T18:50:20Z",
        "closed_at": "2013-08-30T18:46:00Z",
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/678",
          "diff_url": "https://github.com/emberjs/website/pull/678.diff",
          "patch_url": "https://github.com/emberjs/website/pull/678.patch"
        },
        "body": "https://github.com/emberjs/website/issues/663"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23581874",
        "html_url": "https://github.com/emberjs/website/issues/678#issuecomment-23581874",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/678",
        "id": 23581874,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T18:50:20Z",
        "updated_at": "2013-08-30T18:50:20Z",
        "body": "https://github.com/emberjs/website/pull/686\r\n\r\n"
      }
    },
    "public": true,
    "created_at": "2013-08-30T18:50:20Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818315648",
    "type": "PullRequestEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "opened",
      "number": 686,
      "pull_request": {
        "url": "https://api.github.com/repos/emberjs/website/pulls/686",
        "id": 7993284,
        "html_url": "https://github.com/emberjs/website/pull/686",
        "diff_url": "https://github.com/emberjs/website/pull/686.diff",
        "patch_url": "https://github.com/emberjs/website/pull/686.patch",
        "issue_url": "https://github.com/emberjs/website/issues/686",
        "number": 686,
        "state": "open",
        "title": "focus text field recipe",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "body": "",
        "created_at": "2013-08-30T18:50:00Z",
        "updated_at": "2013-08-30T18:50:00Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "milestone": null,
        "commits_url": "https://github.com/emberjs/website/pull/686/commits",
        "review_comments_url": "https://github.com/emberjs/website/pull/686/comments",
        "review_comment_url": "/repos/emberjs/website/pulls/comments/{number}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/686/comments",
        "head": {
          "label": "trombom:focus-text-field-recipe",
          "ref": "focus-text-field-recipe",
          "sha": "f4cb75cba042957abf4bfd466590ecbe84c9adbc",
          "user": {
            "login": "trombom",
            "id": 830120,
            "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
            "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
            "url": "https://api.github.com/users/trombom",
            "html_url": "https://github.com/trombom",
            "followers_url": "https://api.github.com/users/trombom/followers",
            "following_url": "https://api.github.com/users/trombom/following{/other_user}",
            "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
            "organizations_url": "https://api.github.com/users/trombom/orgs",
            "repos_url": "https://api.github.com/users/trombom/repos",
            "events_url": "https://api.github.com/users/trombom/events{/privacy}",
            "received_events_url": "https://api.github.com/users/trombom/received_events",
            "type": "User"
          },
          "repo": {
            "id": 9682592,
            "name": "website",
            "full_name": "trombom/website",
            "owner": {
              "login": "trombom",
              "id": 830120,
              "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
              "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
              "url": "https://api.github.com/users/trombom",
              "html_url": "https://github.com/trombom",
              "followers_url": "https://api.github.com/users/trombom/followers",
              "following_url": "https://api.github.com/users/trombom/following{/other_user}",
              "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
              "organizations_url": "https://api.github.com/users/trombom/orgs",
              "repos_url": "https://api.github.com/users/trombom/repos",
              "events_url": "https://api.github.com/users/trombom/events{/privacy}",
              "received_events_url": "https://api.github.com/users/trombom/received_events",
              "type": "User"
            },
            "private": false,
            "html_url": "https://github.com/trombom/website",
            "description": "Source for emberjs.com",
            "fork": true,
            "url": "https://api.github.com/repos/trombom/website",
            "forks_url": "https://api.github.com/repos/trombom/website/forks",
            "keys_url": "https://api.github.com/repos/trombom/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/trombom/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/trombom/website/teams",
            "hooks_url": "https://api.github.com/repos/trombom/website/hooks",
            "issue_events_url": "https://api.github.com/repos/trombom/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/trombom/website/events",
            "assignees_url": "https://api.github.com/repos/trombom/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/trombom/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/trombom/website/tags",
            "blobs_url": "https://api.github.com/repos/trombom/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/trombom/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/trombom/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/trombom/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/trombom/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/trombom/website/languages",
            "stargazers_url": "https://api.github.com/repos/trombom/website/stargazers",
            "contributors_url": "https://api.github.com/repos/trombom/website/contributors",
            "subscribers_url": "https://api.github.com/repos/trombom/website/subscribers",
            "subscription_url": "https://api.github.com/repos/trombom/website/subscription",
            "commits_url": "https://api.github.com/repos/trombom/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/trombom/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/trombom/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/trombom/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/trombom/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/trombom/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/trombom/website/merges",
            "archive_url": "https://api.github.com/repos/trombom/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/trombom/website/downloads",
            "issues_url": "https://api.github.com/repos/trombom/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/trombom/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/trombom/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/trombom/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/trombom/website/labels{/name}",
            "created_at": "2013-04-25T22:16:32Z",
            "updated_at": "2013-08-30T18:50:00Z",
            "pushed_at": "2013-08-30T18:49:34Z",
            "git_url": "git://github.com/trombom/website.git",
            "ssh_url": "git@github.com:trombom/website.git",
            "clone_url": "https://github.com/trombom/website.git",
            "svn_url": "https://github.com/trombom/website",
            "homepage": "",
            "size": 26871,
            "watchers_count": 0,
            "language": "Ruby",
            "has_issues": false,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "base": {
          "label": "emberjs:master",
          "ref": "master",
          "sha": "edb3d4da141778f9b2ffb4b691dbd7b6aae0a8b8",
          "user": {
            "login": "emberjs",
            "id": 1253363,
            "avatar_url": "https://1.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
            "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
            "url": "https://api.github.com/users/emberjs",
            "html_url": "https://github.com/emberjs",
            "followers_url": "https://api.github.com/users/emberjs/followers",
            "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
            "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
            "organizations_url": "https://api.github.com/users/emberjs/orgs",
            "repos_url": "https://api.github.com/users/emberjs/repos",
            "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
            "received_events_url": "https://api.github.com/users/emberjs/received_events",
            "type": "Organization"
          },
          "repo": {
            "id": 2649031,
            "name": "website",
            "full_name": "emberjs/website",
            "owner": {
              "login": "emberjs",
              "id": 1253363,
              "avatar_url": "https://1.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
              "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
              "url": "https://api.github.com/users/emberjs",
              "html_url": "https://github.com/emberjs",
              "followers_url": "https://api.github.com/users/emberjs/followers",
              "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
              "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
              "organizations_url": "https://api.github.com/users/emberjs/orgs",
              "repos_url": "https://api.github.com/users/emberjs/repos",
              "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
              "received_events_url": "https://api.github.com/users/emberjs/received_events",
              "type": "Organization"
            },
            "private": false,
            "html_url": "https://github.com/emberjs/website",
            "description": "Source for emberjs.com",
            "fork": false,
            "url": "https://api.github.com/repos/emberjs/website",
            "forks_url": "https://api.github.com/repos/emberjs/website/forks",
            "keys_url": "https://api.github.com/repos/emberjs/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/emberjs/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/emberjs/website/teams",
            "hooks_url": "https://api.github.com/repos/emberjs/website/hooks",
            "issue_events_url": "https://api.github.com/repos/emberjs/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/emberjs/website/events",
            "assignees_url": "https://api.github.com/repos/emberjs/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/emberjs/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/emberjs/website/tags",
            "blobs_url": "https://api.github.com/repos/emberjs/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/emberjs/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/emberjs/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/emberjs/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/emberjs/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/emberjs/website/languages",
            "stargazers_url": "https://api.github.com/repos/emberjs/website/stargazers",
            "contributors_url": "https://api.github.com/repos/emberjs/website/contributors",
            "subscribers_url": "https://api.github.com/repos/emberjs/website/subscribers",
            "subscription_url": "https://api.github.com/repos/emberjs/website/subscription",
            "commits_url": "https://api.github.com/repos/emberjs/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/emberjs/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/emberjs/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/emberjs/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/emberjs/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/emberjs/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/emberjs/website/merges",
            "archive_url": "https://api.github.com/repos/emberjs/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/emberjs/website/downloads",
            "issues_url": "https://api.github.com/repos/emberjs/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/emberjs/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/emberjs/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/emberjs/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/emberjs/website/labels{/name}",
            "created_at": "2011-10-26T05:30:05Z",
            "updated_at": "2013-08-30T18:49:33Z",
            "pushed_at": "2013-08-30T18:49:31Z",
            "git_url": "git://github.com/emberjs/website.git",
            "ssh_url": "git@github.com:emberjs/website.git",
            "clone_url": "https://github.com/emberjs/website.git",
            "svn_url": "https://github.com/emberjs/website",
            "homepage": "",
            "size": 29548,
            "watchers_count": 244,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 427,
            "mirror_url": null,
            "open_issues_count": 44,
            "forks": 427,
            "open_issues": 44,
            "watchers": 244,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/686"
          },
          "html": {
            "href": "https://github.com/emberjs/website/pull/686"
          },
          "issue": {
            "href": "https://api.github.com/repos/emberjs/website/issues/686"
          },
          "comments": {
            "href": "https://api.github.com/repos/emberjs/website/issues/686/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/686/comments"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "commits": 1,
        "additions": 46,
        "deletions": 2,
        "changed_files": 1
      }
    },
    "public": true,
    "created_at": "2013-08-30T18:50:00Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818315323",
    "type": "CreateEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 9682592,
      "name": "trombom/website",
      "url": "https://api.github.com/repos/trombom/website"
    },
    "payload": {
      "ref": "focus-text-field-recipe",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "Source for emberjs.com"
    },
    "public": true,
    "created_at": "2013-08-30T18:49:35Z"
  },
  {
    "id": "1818312266",
    "type": "PullRequestEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "closed",
      "number": 678,
      "pull_request": {
        "url": "https://api.github.com/repos/emberjs/website/pulls/678",
        "id": 7983255,
        "html_url": "https://github.com/emberjs/website/pull/678",
        "diff_url": "https://github.com/emberjs/website/pull/678.diff",
        "patch_url": "https://github.com/emberjs/website/pull/678.patch",
        "issue_url": "https://github.com/emberjs/website/issues/678",
        "number": 678,
        "state": "closed",
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "body": "https://github.com/emberjs/website/issues/663",
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T18:46:00Z",
        "closed_at": "2013-08-30T18:46:00Z",
        "merged_at": null,
        "merge_commit_sha": "a86a9d92b48302721a2df0aab7438c12456359c2",
        "assignee": null,
        "milestone": null,
        "commits_url": "https://github.com/emberjs/website/pull/678/commits",
        "review_comments_url": "https://github.com/emberjs/website/pull/678/comments",
        "review_comment_url": "/repos/emberjs/website/pulls/comments/{number}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "head": {
          "label": "trombom:focusing-a-textfield-after-its-been-inserted",
          "ref": "focusing-a-textfield-after-its-been-inserted",
          "sha": "3665766b8c680560e954713b02c0542ab4d20cb6",
          "user": {
            "login": "trombom",
            "id": 830120,
            "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
            "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
            "url": "https://api.github.com/users/trombom",
            "html_url": "https://github.com/trombom",
            "followers_url": "https://api.github.com/users/trombom/followers",
            "following_url": "https://api.github.com/users/trombom/following{/other_user}",
            "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
            "organizations_url": "https://api.github.com/users/trombom/orgs",
            "repos_url": "https://api.github.com/users/trombom/repos",
            "events_url": "https://api.github.com/users/trombom/events{/privacy}",
            "received_events_url": "https://api.github.com/users/trombom/received_events",
            "type": "User"
          },
          "repo": {
            "id": 9682592,
            "name": "website",
            "full_name": "trombom/website",
            "owner": {
              "login": "trombom",
              "id": 830120,
              "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
              "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
              "url": "https://api.github.com/users/trombom",
              "html_url": "https://github.com/trombom",
              "followers_url": "https://api.github.com/users/trombom/followers",
              "following_url": "https://api.github.com/users/trombom/following{/other_user}",
              "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
              "organizations_url": "https://api.github.com/users/trombom/orgs",
              "repos_url": "https://api.github.com/users/trombom/repos",
              "events_url": "https://api.github.com/users/trombom/events{/privacy}",
              "received_events_url": "https://api.github.com/users/trombom/received_events",
              "type": "User"
            },
            "private": false,
            "html_url": "https://github.com/trombom/website",
            "description": "Source for emberjs.com",
            "fork": true,
            "url": "https://api.github.com/repos/trombom/website",
            "forks_url": "https://api.github.com/repos/trombom/website/forks",
            "keys_url": "https://api.github.com/repos/trombom/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/trombom/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/trombom/website/teams",
            "hooks_url": "https://api.github.com/repos/trombom/website/hooks",
            "issue_events_url": "https://api.github.com/repos/trombom/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/trombom/website/events",
            "assignees_url": "https://api.github.com/repos/trombom/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/trombom/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/trombom/website/tags",
            "blobs_url": "https://api.github.com/repos/trombom/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/trombom/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/trombom/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/trombom/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/trombom/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/trombom/website/languages",
            "stargazers_url": "https://api.github.com/repos/trombom/website/stargazers",
            "contributors_url": "https://api.github.com/repos/trombom/website/contributors",
            "subscribers_url": "https://api.github.com/repos/trombom/website/subscribers",
            "subscription_url": "https://api.github.com/repos/trombom/website/subscription",
            "commits_url": "https://api.github.com/repos/trombom/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/trombom/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/trombom/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/trombom/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/trombom/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/trombom/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/trombom/website/merges",
            "archive_url": "https://api.github.com/repos/trombom/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/trombom/website/downloads",
            "issues_url": "https://api.github.com/repos/trombom/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/trombom/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/trombom/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/trombom/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/trombom/website/labels{/name}",
            "created_at": "2013-04-25T22:16:32Z",
            "updated_at": "2013-08-30T18:46:00Z",
            "pushed_at": "2013-08-30T12:42:38Z",
            "git_url": "git://github.com/trombom/website.git",
            "ssh_url": "git@github.com:trombom/website.git",
            "clone_url": "https://github.com/trombom/website.git",
            "svn_url": "https://github.com/trombom/website",
            "homepage": "",
            "size": 26822,
            "watchers_count": 0,
            "language": "Ruby",
            "has_issues": false,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "base": {
          "label": "emberjs:master",
          "ref": "master",
          "sha": "850eae267702750b424fdbf8057db3b9ea07a57c",
          "user": {
            "login": "emberjs",
            "id": 1253363,
            "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
            "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
            "url": "https://api.github.com/users/emberjs",
            "html_url": "https://github.com/emberjs",
            "followers_url": "https://api.github.com/users/emberjs/followers",
            "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
            "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
            "organizations_url": "https://api.github.com/users/emberjs/orgs",
            "repos_url": "https://api.github.com/users/emberjs/repos",
            "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
            "received_events_url": "https://api.github.com/users/emberjs/received_events",
            "type": "Organization"
          },
          "repo": {
            "id": 2649031,
            "name": "website",
            "full_name": "emberjs/website",
            "owner": {
              "login": "emberjs",
              "id": 1253363,
              "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
              "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
              "url": "https://api.github.com/users/emberjs",
              "html_url": "https://github.com/emberjs",
              "followers_url": "https://api.github.com/users/emberjs/followers",
              "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
              "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
              "organizations_url": "https://api.github.com/users/emberjs/orgs",
              "repos_url": "https://api.github.com/users/emberjs/repos",
              "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
              "received_events_url": "https://api.github.com/users/emberjs/received_events",
              "type": "Organization"
            },
            "private": false,
            "html_url": "https://github.com/emberjs/website",
            "description": "Source for emberjs.com",
            "fork": false,
            "url": "https://api.github.com/repos/emberjs/website",
            "forks_url": "https://api.github.com/repos/emberjs/website/forks",
            "keys_url": "https://api.github.com/repos/emberjs/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/emberjs/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/emberjs/website/teams",
            "hooks_url": "https://api.github.com/repos/emberjs/website/hooks",
            "issue_events_url": "https://api.github.com/repos/emberjs/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/emberjs/website/events",
            "assignees_url": "https://api.github.com/repos/emberjs/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/emberjs/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/emberjs/website/tags",
            "blobs_url": "https://api.github.com/repos/emberjs/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/emberjs/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/emberjs/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/emberjs/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/emberjs/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/emberjs/website/languages",
            "stargazers_url": "https://api.github.com/repos/emberjs/website/stargazers",
            "contributors_url": "https://api.github.com/repos/emberjs/website/contributors",
            "subscribers_url": "https://api.github.com/repos/emberjs/website/subscribers",
            "subscription_url": "https://api.github.com/repos/emberjs/website/subscription",
            "commits_url": "https://api.github.com/repos/emberjs/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/emberjs/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/emberjs/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/emberjs/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/emberjs/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/emberjs/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/emberjs/website/merges",
            "archive_url": "https://api.github.com/repos/emberjs/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/emberjs/website/downloads",
            "issues_url": "https://api.github.com/repos/emberjs/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/emberjs/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/emberjs/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/emberjs/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/emberjs/website/labels{/name}",
            "created_at": "2011-10-26T05:30:05Z",
            "updated_at": "2013-08-30T18:43:27Z",
            "pushed_at": "2013-08-30T18:43:26Z",
            "git_url": "git://github.com/emberjs/website.git",
            "ssh_url": "git@github.com:emberjs/website.git",
            "clone_url": "https://github.com/emberjs/website.git",
            "svn_url": "https://github.com/emberjs/website",
            "homepage": "",
            "size": 29548,
            "watchers_count": 244,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 427,
            "mirror_url": null,
            "open_issues_count": 45,
            "forks": 427,
            "open_issues": 45,
            "watchers": 244,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/678"
          },
          "html": {
            "href": "https://github.com/emberjs/website/pull/678"
          },
          "issue": {
            "href": "https://api.github.com/repos/emberjs/website/issues/678"
          },
          "comments": {
            "href": "https://api.github.com/repos/emberjs/website/issues/678/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/678/comments"
          }
        },
        "merged": false,
        "mergeable": true,
        "mergeable_state": "clean",
        "merged_by": null,
        "comments": 4,
        "review_comments": 0,
        "commits": 19,
        "additions": 487,
        "deletions": 36,
        "changed_files": 38
      }
    },
    "public": true,
    "created_at": "2013-08-30T18:46:01Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1818312034",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/678",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/678/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/678/events",
        "html_url": "https://github.com/emberjs/website/issues/678",
        "id": 18785796,
        "number": 678,
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 4,
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T18:45:45Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/678",
          "diff_url": "https://github.com/emberjs/website/pull/678.diff",
          "patch_url": "https://github.com/emberjs/website/pull/678.patch"
        },
        "body": "https://github.com/emberjs/website/issues/663"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23581596",
        "html_url": "https://github.com/emberjs/website/issues/678#issuecomment-23581596",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/678",
        "id": 23581596,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T18:45:45Z",
        "updated_at": "2013-08-30T18:45:45Z",
        "body": "yep, will do\r\n"
      }
    },
    "public": true,
    "created_at": "2013-08-30T18:45:45Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817988684",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/678",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/678/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/678/events",
        "html_url": "https://github.com/emberjs/website/issues/678",
        "id": 18785796,
        "number": 678,
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 1,
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T12:50:47Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/website/pull/678",
          "diff_url": "https://github.com/emberjs/website/pull/678.diff",
          "patch_url": "https://github.com/emberjs/website/pull/678.patch"
        },
        "body": "https://github.com/emberjs/website/issues/663"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23558763",
        "html_url": "https://github.com/emberjs/website/issues/678#issuecomment-23558763",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/678",
        "id": 23558763,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T12:50:47Z",
        "updated_at": "2013-08-30T12:50:47Z",
        "body": "It seems like I messed this pull up real good, yes or no? I merged the current cookbook into a new branch before committing... Someone tell me what I should do"
      }
    },
    "public": true,
    "created_at": "2013-08-30T12:50:48Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817987475",
    "type": "PullRequestEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "opened",
      "number": 678,
      "pull_request": {
        "url": "https://api.github.com/repos/emberjs/website/pulls/678",
        "id": 7983255,
        "html_url": "https://github.com/emberjs/website/pull/678",
        "diff_url": "https://github.com/emberjs/website/pull/678.diff",
        "patch_url": "https://github.com/emberjs/website/pull/678.patch",
        "issue_url": "https://github.com/emberjs/website/issues/678",
        "number": 678,
        "state": "open",
        "title": "Focusing a textfield after its been inserted",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "body": "https://github.com/emberjs/website/issues/663",
        "created_at": "2013-08-30T12:49:11Z",
        "updated_at": "2013-08-30T12:49:11Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "milestone": null,
        "commits_url": "https://github.com/emberjs/website/pull/678/commits",
        "review_comments_url": "https://github.com/emberjs/website/pull/678/comments",
        "review_comment_url": "/repos/emberjs/website/pulls/comments/{number}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/678/comments",
        "head": {
          "label": "trombom:focusing-a-textfield-after-its-been-inserted",
          "ref": "focusing-a-textfield-after-its-been-inserted",
          "sha": "3665766b8c680560e954713b02c0542ab4d20cb6",
          "user": {
            "login": "trombom",
            "id": 830120,
            "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
            "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
            "url": "https://api.github.com/users/trombom",
            "html_url": "https://github.com/trombom",
            "followers_url": "https://api.github.com/users/trombom/followers",
            "following_url": "https://api.github.com/users/trombom/following{/other_user}",
            "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
            "organizations_url": "https://api.github.com/users/trombom/orgs",
            "repos_url": "https://api.github.com/users/trombom/repos",
            "events_url": "https://api.github.com/users/trombom/events{/privacy}",
            "received_events_url": "https://api.github.com/users/trombom/received_events",
            "type": "User"
          },
          "repo": {
            "id": 9682592,
            "name": "website",
            "full_name": "trombom/website",
            "owner": {
              "login": "trombom",
              "id": 830120,
              "avatar_url": "https://2.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
              "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
              "url": "https://api.github.com/users/trombom",
              "html_url": "https://github.com/trombom",
              "followers_url": "https://api.github.com/users/trombom/followers",
              "following_url": "https://api.github.com/users/trombom/following{/other_user}",
              "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
              "organizations_url": "https://api.github.com/users/trombom/orgs",
              "repos_url": "https://api.github.com/users/trombom/repos",
              "events_url": "https://api.github.com/users/trombom/events{/privacy}",
              "received_events_url": "https://api.github.com/users/trombom/received_events",
              "type": "User"
            },
            "private": false,
            "html_url": "https://github.com/trombom/website",
            "description": "Source for emberjs.com",
            "fork": true,
            "url": "https://api.github.com/repos/trombom/website",
            "forks_url": "https://api.github.com/repos/trombom/website/forks",
            "keys_url": "https://api.github.com/repos/trombom/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/trombom/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/trombom/website/teams",
            "hooks_url": "https://api.github.com/repos/trombom/website/hooks",
            "issue_events_url": "https://api.github.com/repos/trombom/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/trombom/website/events",
            "assignees_url": "https://api.github.com/repos/trombom/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/trombom/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/trombom/website/tags",
            "blobs_url": "https://api.github.com/repos/trombom/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/trombom/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/trombom/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/trombom/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/trombom/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/trombom/website/languages",
            "stargazers_url": "https://api.github.com/repos/trombom/website/stargazers",
            "contributors_url": "https://api.github.com/repos/trombom/website/contributors",
            "subscribers_url": "https://api.github.com/repos/trombom/website/subscribers",
            "subscription_url": "https://api.github.com/repos/trombom/website/subscription",
            "commits_url": "https://api.github.com/repos/trombom/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/trombom/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/trombom/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/trombom/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/trombom/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/trombom/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/trombom/website/merges",
            "archive_url": "https://api.github.com/repos/trombom/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/trombom/website/downloads",
            "issues_url": "https://api.github.com/repos/trombom/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/trombom/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/trombom/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/trombom/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/trombom/website/labels{/name}",
            "created_at": "2013-04-25T22:16:32Z",
            "updated_at": "2013-08-30T12:49:11Z",
            "pushed_at": "2013-08-30T12:42:38Z",
            "git_url": "git://github.com/trombom/website.git",
            "ssh_url": "git@github.com:trombom/website.git",
            "clone_url": "https://github.com/trombom/website.git",
            "svn_url": "https://github.com/trombom/website",
            "homepage": "",
            "size": 26822,
            "watchers_count": 0,
            "language": "Ruby",
            "has_issues": false,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "base": {
          "label": "emberjs:master",
          "ref": "master",
          "sha": "850eae267702750b424fdbf8057db3b9ea07a57c",
          "user": {
            "login": "emberjs",
            "id": 1253363,
            "avatar_url": "https://2.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
            "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
            "url": "https://api.github.com/users/emberjs",
            "html_url": "https://github.com/emberjs",
            "followers_url": "https://api.github.com/users/emberjs/followers",
            "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
            "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
            "organizations_url": "https://api.github.com/users/emberjs/orgs",
            "repos_url": "https://api.github.com/users/emberjs/repos",
            "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
            "received_events_url": "https://api.github.com/users/emberjs/received_events",
            "type": "Organization"
          },
          "repo": {
            "id": 2649031,
            "name": "website",
            "full_name": "emberjs/website",
            "owner": {
              "login": "emberjs",
              "id": 1253363,
              "avatar_url": "https://2.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fidenticons.github.com%2Ff8d48ba4cfebb16ac5dbe2b404b30e84.png",
              "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
              "url": "https://api.github.com/users/emberjs",
              "html_url": "https://github.com/emberjs",
              "followers_url": "https://api.github.com/users/emberjs/followers",
              "following_url": "https://api.github.com/users/emberjs/following{/other_user}",
              "gists_url": "https://api.github.com/users/emberjs/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/emberjs/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/emberjs/subscriptions",
              "organizations_url": "https://api.github.com/users/emberjs/orgs",
              "repos_url": "https://api.github.com/users/emberjs/repos",
              "events_url": "https://api.github.com/users/emberjs/events{/privacy}",
              "received_events_url": "https://api.github.com/users/emberjs/received_events",
              "type": "Organization"
            },
            "private": false,
            "html_url": "https://github.com/emberjs/website",
            "description": "Source for emberjs.com",
            "fork": false,
            "url": "https://api.github.com/repos/emberjs/website",
            "forks_url": "https://api.github.com/repos/emberjs/website/forks",
            "keys_url": "https://api.github.com/repos/emberjs/website/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/emberjs/website/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/emberjs/website/teams",
            "hooks_url": "https://api.github.com/repos/emberjs/website/hooks",
            "issue_events_url": "https://api.github.com/repos/emberjs/website/issues/events{/number}",
            "events_url": "https://api.github.com/repos/emberjs/website/events",
            "assignees_url": "https://api.github.com/repos/emberjs/website/assignees{/user}",
            "branches_url": "https://api.github.com/repos/emberjs/website/branches{/branch}",
            "tags_url": "https://api.github.com/repos/emberjs/website/tags",
            "blobs_url": "https://api.github.com/repos/emberjs/website/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/emberjs/website/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/emberjs/website/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/emberjs/website/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/emberjs/website/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/emberjs/website/languages",
            "stargazers_url": "https://api.github.com/repos/emberjs/website/stargazers",
            "contributors_url": "https://api.github.com/repos/emberjs/website/contributors",
            "subscribers_url": "https://api.github.com/repos/emberjs/website/subscribers",
            "subscription_url": "https://api.github.com/repos/emberjs/website/subscription",
            "commits_url": "https://api.github.com/repos/emberjs/website/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/emberjs/website/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/emberjs/website/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/emberjs/website/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/emberjs/website/contents/{+path}",
            "compare_url": "https://api.github.com/repos/emberjs/website/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/emberjs/website/merges",
            "archive_url": "https://api.github.com/repos/emberjs/website/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/emberjs/website/downloads",
            "issues_url": "https://api.github.com/repos/emberjs/website/issues{/number}",
            "pulls_url": "https://api.github.com/repos/emberjs/website/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/emberjs/website/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/emberjs/website/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/emberjs/website/labels{/name}",
            "created_at": "2011-10-26T05:30:05Z",
            "updated_at": "2013-08-30T12:48:11Z",
            "pushed_at": "2013-08-30T02:58:28Z",
            "git_url": "git://github.com/emberjs/website.git",
            "ssh_url": "git@github.com:emberjs/website.git",
            "clone_url": "https://github.com/emberjs/website.git",
            "svn_url": "https://github.com/emberjs/website",
            "homepage": "",
            "size": 29510,
            "watchers_count": 242,
            "language": "Ruby",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "forks_count": 425,
            "mirror_url": null,
            "open_issues_count": 49,
            "forks": 425,
            "open_issues": 49,
            "watchers": 242,
            "master_branch": "master",
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/678"
          },
          "html": {
            "href": "https://github.com/emberjs/website/pull/678"
          },
          "issue": {
            "href": "https://api.github.com/repos/emberjs/website/issues/678"
          },
          "comments": {
            "href": "https://api.github.com/repos/emberjs/website/issues/678/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/emberjs/website/pulls/678/comments"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "commits": 19,
        "additions": 487,
        "deletions": 36,
        "changed_files": 38
      }
    },
    "public": true,
    "created_at": "2013-08-30T12:49:12Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817982858",
    "type": "CreateEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 9682592,
      "name": "trombom/website",
      "url": "https://api.github.com/repos/trombom/website"
    },
    "payload": {
      "ref": "focusing-a-textfield-after-its-been-inserted",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "Source for emberjs.com"
    },
    "public": true,
    "created_at": "2013-08-30T12:42:38Z"
  },
  {
    "id": "1817600825",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://0.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 17,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-30T00:45:14Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [ ] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [ ] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [ ] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md)\r\n\r\n### Event Handling and Data Binding\r\n- [ ] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [ ] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [ ] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md)\r\n\r\n### Helpers and Components\r\n- [ ] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n\r\n### Working With Objects\r\n- [ ] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md)\r\n- [x] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [x] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md) (@GavinJoyce)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md)\r\n\r\n### Debugging and Configuration\r\n- [ ] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23533929",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23533929",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23533929,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T00:45:13Z",
        "updated_at": "2013-08-30T00:45:13Z",
        "body": "Cool, thanks @trek "
      }
    },
    "public": true,
    "created_at": "2013-08-30T00:45:14Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817590243",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://2.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 14,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-30T00:25:33Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [ ] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [ ] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [ ] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md)\r\n\r\n### Event Handling and Data Binding\r\n- [ ] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [ ] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [ ] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md)\r\n\r\n### Helpers and Components\r\n- [ ] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n\r\n### Working With Objects\r\n- [ ] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md)\r\n- [x] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [x] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md) (@GavinJoyce)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md)\r\n\r\n### Debugging and Configuration\r\n- [ ] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23533257",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23533257",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23533257,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-30T00:25:33Z",
        "updated_at": "2013-08-30T00:25:33Z",
        "body": "I'll provide some context till ya'll get back to me: Here is the commit message from Luke Melia, August 17th:\r\n```\r\nAdd Ember.on, Function.prototype.on, didInit event\r\n\r\nThis commit adds `Ember.on(eventName, func)` and `Function.prototype.on`\r\nas cousins to `Ember.observes` and `Function.prototype.observes`. This\r\nprovides a declarative form of marking methods to execute when an event\r\nfires.\r\n\r\nThis is useful for mixins which need to do things on `didInsertElement` and `willDestroyElement`, but don't want to force a call to `super` from the classes that include it:\r\n\r\n    Ember.Mixin.create({\r\n      doSomethingWithElement: function() {\r\n        // Executes whenever the \"didInsertElement\" event fires, regardless of the presence of a method named `didInsertElement`\r\n      }.on('didInsertElement')\r\n    });\r\n\r\nIn addition, this commit also makes Ember.Object send a `didInit` event after initializing. This provides for an elegant solution to a common need: marking a function as an observer and also executing it at creation time. e.g.\r\n\r\n    Ember.Object.extend({\r\n      upateOptions: function(){\r\n        var opts = this.get('controller.foo').importantTransform();\r\n        this.set('options', opts);\r\n      }.observes('controller.foo').on('didInit')\r\n    });\r\n```\r\n\r\nSo it seams the feature was meant to avoid calling super in mixins, or for having to deal with super in init. It  was further solidified when init no longer computes computed properties during `init`. My question is really whether you want the world to use this api for normal didInsertElement usage, or whether there should be two known ways to listen for this event. (or any `did` or `will`, etc type of events).\r\n\r\nHopefully that makes sense, it's all pretty new, so forgive my ignorance"
      }
    },
    "public": true,
    "created_at": "2013-08-30T00:25:33Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817569205",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://2.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 12,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-29T23:48:18Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [ ] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [ ] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [ ] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md)\r\n\r\n### Event Handling and Data Binding\r\n- [ ] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [ ] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [ ] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md)\r\n\r\n### Helpers and Components\r\n- [ ] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n\r\n### Working With Objects\r\n- [ ] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md)\r\n- [ ] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [ ] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md)\r\n\r\n### Debugging and Configuration\r\n- [ ] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23531916",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23531916",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23531916,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-29T23:48:18Z",
        "updated_at": "2013-08-29T23:48:18Z",
        "body": "@trek - which version of didInsertElement should I use? (see my above comment)"
      }
    },
    "public": true,
    "created_at": "2013-08-29T23:48:18Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817566154",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://2.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 10,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-29T23:43:31Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [x] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [ ] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md) (@trombom)\r\n- [ ] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md) (@twokul)\r\n- [ ] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md)\r\n\r\n### Event Handling and Data Binding\r\n- [ ] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [ ] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [ ] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md)\r\n\r\n### Helpers and Components\r\n- [ ] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n\r\n### Working With Objects\r\n- [ ] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md)\r\n- [ ] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md) (@GavinJoyce)\r\n- [ ] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md)\r\n\r\n### Debugging and Configuration\r\n- [ ] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23531726",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23531726",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23531726,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://1.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-29T23:43:31Z",
        "updated_at": "2013-08-29T23:43:31Z",
        "body": "@tomdale, @twokul - I have a question. With rc8 you can now do this:\r\n\r\nhttp://jsbin.com/ePiCiVa/7/edit?html,js,output\r\n```javascript\r\nvar App = Ember.Application.create();\r\n\r\nApp.SomeView = Ember.TextField.extend({\r\n  focusMyTextField: function() {\r\n   this.$().focus();\r\n  }.on('didInsertElement') \r\n});\r\n```\r\n\r\nas well as the old way:\r\n\r\nhttp://jsbin.com/ePiCiVa/8/edit?html,js,output\r\n```javascript\r\nvar App = Ember.Application.create();\r\n\r\nApp.SomeView = Ember.TextField.extend({\r\n  didInsertElement: function() {\r\n   this.$().focus();\r\n  }\r\n});\r\n```\r\n\r\nWhich would you prefer for the recipe \"Focusing a Textfield after It's Been Inserted\"\r\n\r\nThanks!"
      }
    },
    "public": true,
    "created_at": "2013-08-29T23:43:32Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1817487889",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/663",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/663/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/663/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/663/events",
        "html_url": "https://github.com/emberjs/website/issues/663",
        "id": 18757760,
        "number": 663,
        "title": "Ember Cookbook v1.0",
        "user": {
          "login": "cavneb",
          "id": 12481,
          "avatar_url": "https://1.gravatar.com/avatar/469f88e0c2d6e73916b567f389987301?d=https%3A%2F%2Fidenticons.github.com%2F705a254246ff6850de83ad6a8e461c0a.png",
          "gravatar_id": "469f88e0c2d6e73916b567f389987301",
          "url": "https://api.github.com/users/cavneb",
          "html_url": "https://github.com/cavneb",
          "followers_url": "https://api.github.com/users/cavneb/followers",
          "following_url": "https://api.github.com/users/cavneb/following{/other_user}",
          "gists_url": "https://api.github.com/users/cavneb/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cavneb/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cavneb/subscriptions",
          "organizations_url": "https://api.github.com/users/cavneb/orgs",
          "repos_url": "https://api.github.com/users/cavneb/repos",
          "events_url": "https://api.github.com/users/cavneb/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cavneb/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 2,
        "created_at": "2013-08-29T21:13:55Z",
        "updated_at": "2013-08-29T21:57:05Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "On Saturday, Ember 1.0 will be released. We want to get as many recipes completed for the new cookbook section done by then. Here are the current topics:\r\n\r\n### User Interface and Interaction\r\n- [x] [Adding CSS Classes to Your Components](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_components.md) **<< USE AS EXAMPLE**\r\n- [ ] [Adding CSS Classes to Your Components Based on Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/adding_css_classes_to_your_views_based_on_properties.md) (@cavneb)\r\n- [ ] [Focusing a Textfield after It's Been Inserted](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/focusing_a_textfield_after_its_been_inserted.md)\r\n- [ ] [Displaying Formatted Dates With Moment.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/displaying_formatted_dates_with_moment_js.md)\r\n- [ ] [Specifying Data-Driven Areas of Templates That Do Not Need To Update](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/user_interface_and_interaction/specifying_data_driven_areas_of_templates_that_do_not_need_to_update.md)\r\n\r\n### Event Handling and Data Binding\r\n- [ ] [Binding Properties of an Object to Its Own Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/binding_properties_of_an_object_to_its_own_properties.md)\r\n- [ ] [Responding to User Events](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/responding_to_user_events.md)\r\n- [ ] [Toggling A Boolean Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/toggling_a_boolean_property.md)\r\n- [ ] [Using Computed Properties](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/using_computed_properties.md)\r\n- [ ] [Setting The Attributes of a Component's Element](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/event_handling_and_data_binding/setting_the_attributes_of_a_views_element.md)\r\n\r\n### Client/Server Interaction\r\n- [ ] [Loading Data From A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/loading_data_from_a_server.md)\r\n- [ ] [Sending Data To A Server](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/sending_data_to_a_server.md)\r\n- [ ] [Serving Compiled Handlebars Templates Using Node.js](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/client_server_interaction/serving_compiled_templates_using_nodejs.md)\r\n\r\n### Helpers and Components\r\n- [ ] [Writing a Custom Handlebars Helper](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/helpers_and_components/writing_a_custom_handlebars_helper.md) (@fabriciotav)\r\n\r\n### Working With Objects\r\n- [ ] [Displaying Content Arrays in Reverse Order](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/displaying_content_arrays_in_reverse_order.md)\r\n- [ ] [Incrementing And Decrementing A Property](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/incrementing_and_decrementing_a_property.md)\r\n- [ ] [Setting Multiple Properties At Once](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/setting_multiple_properties_at_once.md)\r\n- [ ] [Continuous redrawing of views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/continuous_redrawing_of_views.md)\r\n- [ ] [Naming Your Child Views](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/working_with_objects/naming_your_child_views.md)\r\n\r\n### Debugging and Configuration\r\n- [ ] [Setting Ember Global Flags](https://github.com/emberjs/website/blob/cookbook/source/guides/cookbook/debugging_and_configuration/setting_ember_global_flags.md)\r\n\r\n### Possible topics:\r\n- [ ] Adding Pagination to an ArrayController\r\n- [ ] Updating Views Real-Time with WebSockets\r\n- [ ] Creating a Master/Detail Interface\r\n- [ ] Displaying Content with Partials\r\n- [ ] Inserting Data From Other Controllers with Render\r\n- [ ] Applying a Simple Authentication Solution\r\n- [ ] Loading Code/Templates Lazily\r\n- [ ] Selecting Dates with DatePicker\r\n- [ ] Performing Form Validations\r\n- [ ] Using Twitter Bootstrap\r\n\r\n## How to Help:\r\n\r\nFork the website repo and checkout the cookbook branch. Modify the files linked above and submit PR. If you are going to work on one, please say so in the comments section. Please only do one at a time.\r\n\r\nThanks for your help! We are very eager to get this live by this weekend."
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23526716",
        "html_url": "https://github.com/emberjs/website/issues/663#issuecomment-23526716",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/663",
        "id": 23526716,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-29T21:57:05Z",
        "updated_at": "2013-08-29T21:57:05Z",
        "body": "I'll take \"Focusing a Textfield after It's Been Inserted\""
      }
    },
    "public": true,
    "created_at": "2013-08-29T21:57:05Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1816164482",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 2649031,
      "name": "emberjs/website",
      "url": "https://api.github.com/repos/emberjs/website"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/website/issues/463",
        "labels_url": "https://api.github.com/repos/emberjs/website/issues/463/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/website/issues/463/comments",
        "events_url": "https://api.github.com/repos/emberjs/website/issues/463/events",
        "html_url": "https://github.com/emberjs/website/issues/463",
        "id": 13458599,
        "number": 463,
        "title": "Document rc3's {{input}} helper in Guides",
        "user": {
          "login": "thomasboyt",
          "id": 579628,
          "avatar_url": "https://0.gravatar.com/avatar/84ef853d16e9ed49e6808d7b024c064c?d=https%3A%2F%2Fidenticons.github.com%2Fe806d119256c0d825883e327f54fe6ff.png",
          "gravatar_id": "84ef853d16e9ed49e6808d7b024c064c",
          "url": "https://api.github.com/users/thomasboyt",
          "html_url": "https://github.com/thomasboyt",
          "followers_url": "https://api.github.com/users/thomasboyt/followers",
          "following_url": "https://api.github.com/users/thomasboyt/following{/other_user}",
          "gists_url": "https://api.github.com/users/thomasboyt/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/thomasboyt/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/thomasboyt/subscriptions",
          "organizations_url": "https://api.github.com/users/thomasboyt/orgs",
          "repos_url": "https://api.github.com/users/thomasboyt/repos",
          "events_url": "https://api.github.com/users/thomasboyt/events{/privacy}",
          "received_events_url": "https://api.github.com/users/thomasboyt/received_events",
          "type": "User"
        },
        "labels": [
          {
            "url": "https://api.github.com/repos/emberjs/website/labels/documentation",
            "name": "documentation",
            "color": "d7e102"
          }
        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 5,
        "created_at": "2013-04-21T23:22:42Z",
        "updated_at": "2013-08-28T18:03:27Z",
        "closed_at": null,
        "pull_request": {
          "html_url": null,
          "diff_url": null,
          "patch_url": null
        },
        "body": "I'll take a crack at this if no one else is already working on it :)"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/website/issues/comments/23434874",
        "html_url": "https://github.com/emberjs/website/issues/463#issuecomment-23434874",
        "issue_url": "https://api.github.com/repos/emberjs/website/issues/463",
        "id": 23434874,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-28T18:03:27Z",
        "updated_at": "2013-08-28T18:03:27Z",
        "body": "@thomasboyt I think that's the right place to put it, maybe rename it to \"Built-in View Helpers\" or something to that affect. \r\n\r\nAlso, checkout https://github.com/emberjs/ember.js/issues/3217 and https://github.com/emberjs/ember.js/pull/3230 for the api doc changes\r\n\r\nAnd if you need help or want to split the work, let me know"
      }
    },
    "public": true,
    "created_at": "2013-08-28T18:03:28Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1816129902",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 1801829,
      "name": "emberjs/ember.js",
      "url": "https://api.github.com/repos/emberjs/ember.js"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/emberjs/ember.js/issues/3230",
        "labels_url": "https://api.github.com/repos/emberjs/ember.js/issues/3230/labels{/name}",
        "comments_url": "https://api.github.com/repos/emberjs/ember.js/issues/3230/comments",
        "events_url": "https://api.github.com/repos/emberjs/ember.js/issues/3230/events",
        "html_url": "https://github.com/emberjs/ember.js/issues/3230",
        "id": 18658232,
        "number": 3230,
        "title": "Update api docs for {{textarea}}",
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "labels": [

        ],
        "state": "open",
        "assignee": null,
        "milestone": null,
        "comments": 3,
        "created_at": "2013-08-28T09:39:30Z",
        "updated_at": "2013-08-28T17:28:24Z",
        "closed_at": null,
        "pull_request": {
          "html_url": "https://github.com/emberjs/ember.js/pull/3230",
          "diff_url": "https://github.com/emberjs/ember.js/pull/3230.diff",
          "patch_url": "https://github.com/emberjs/ember.js/pull/3230.patch"
        },
        "body": "- make them similar to {{input}}\r\n- provide extended example to show how easy implementing a one way and\r\ntwo way binding on a textarea can be"
      },
      "comment": {
        "url": "https://api.github.com/repos/emberjs/ember.js/issues/comments/23432432",
        "html_url": "https://github.com/emberjs/ember.js/issues/3230#issuecomment-23432432",
        "issue_url": "https://api.github.com/repos/emberjs/ember.js/issues/3230",
        "id": 23432432,
        "user": {
          "login": "trombom",
          "id": 830120,
          "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fidenticons.github.com%2Fafecf15de418c2ad648d175cfb76c1b7.png",
          "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
          "url": "https://api.github.com/users/trombom",
          "html_url": "https://github.com/trombom",
          "followers_url": "https://api.github.com/users/trombom/followers",
          "following_url": "https://api.github.com/users/trombom/following{/other_user}",
          "gists_url": "https://api.github.com/users/trombom/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/trombom/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/trombom/subscriptions",
          "organizations_url": "https://api.github.com/users/trombom/orgs",
          "repos_url": "https://api.github.com/users/trombom/repos",
          "events_url": "https://api.github.com/users/trombom/events{/privacy}",
          "received_events_url": "https://api.github.com/users/trombom/received_events",
          "type": "User"
        },
        "created_at": "2013-08-28T17:28:23Z",
        "updated_at": "2013-08-28T17:28:23Z",
        "body": "@rjackson - thanks, i appreciate the feedback"
      }
    },
    "public": true,
    "created_at": "2013-08-28T17:28:24Z",
    "org": {
      "id": 1253363,
      "login": "emberjs",
      "gravatar_id": "792333d2bad390e8a2e23f5e2f41f214",
      "url": "https://api.github.com/orgs/emberjs",
      "avatar_url": "https://0.gravatar.com/avatar/792333d2bad390e8a2e23f5e2f41f214?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
    }
  },
  {
    "id": "1816126889",
    "type": "PushEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 9381728,
      "name": "trombom/ember.js",
      "url": "https://api.github.com/repos/trombom/ember.js"
    },
    "payload": {
      "push_id": 221041419,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/fix-api-docs2",
      "head": "2efa820389bb439b630bd1e56b64c51c3fded0f3",
      "before": "934b9b7233f0407d92b0c98a873db595357a51c5",
      "commits": [
        {
          "sha": "2efa820389bb439b630bd1e56b64c51c3fded0f3",
          "author": {
            "email": "erik.trom@gmail.com",
            "name": "Erik Trom"
          },
          "message": "typos, clarification",
          "distinct": true,
          "url": "https://api.github.com/repos/trombom/ember.js/commits/2efa820389bb439b630bd1e56b64c51c3fded0f3"
        }
      ]
    },
    "public": true,
    "created_at": "2013-08-28T17:25:07Z"
  },
  {
    "id": "1815701558",
    "type": "DeleteEvent",
    "actor": {
      "id": 830120,
      "login": "trombom",
      "gravatar_id": "2a18db29950402e749bbd8dc211b69be",
      "url": "https://api.github.com/users/trombom",
      "avatar_url": "https://0.gravatar.com/avatar/2a18db29950402e749bbd8dc211b69be?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
    },
    "repo": {
      "id": 9381728,
      "name": "trombom/ember.js",
      "url": "https://api.github.com/repos/trombom/ember.js"
    },
    "payload": {
      "ref": "fix-api-docs",
      "ref_type": "branch"
    },
    "public": true,
    "created_at": "2013-08-28T09:44:09Z"
  }
];