/* import axios from "axios"; */
const UserDataSource = require("../user.datasource");
const UserService = require("../user.service");

jest.mock("../user.datasource");

describe("User Test Suit Service Layer", () => {
  const listOfUsers = [
    {
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url:
        "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "defunkt",
      id: 2,
      node_id: "MDQ6VXNlcjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/defunkt",
      html_url: "https://github.com/defunkt",
      followers_url: "https://api.github.com/users/defunkt/followers",
      following_url:
        "https://api.github.com/users/defunkt/following{/other_user}",
      gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
      organizations_url: "https://api.github.com/users/defunkt/orgs",
      repos_url: "https://api.github.com/users/defunkt/repos",
      events_url: "https://api.github.com/users/defunkt/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/defunkt/received_events",
      type: "User",
      site_admin: false,
    },
  ];

  const user = {
    login: "simoesleal",
    id: 12055630,
    node_id: "MDQ6VXNlcjEyMDU1NjMw",
    avatar_url: "https://avatars.githubusercontent.com/u/12055630?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/simoesleal",
    html_url: "https://github.com/simoesleal",
    followers_url: "https://api.github.com/users/simoesleal/followers",
    following_url:
      "https://api.github.com/users/simoesleal/following{/other_user}",
    gists_url: "https://api.github.com/users/simoesleal/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/simoesleal/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/simoesleal/subscriptions",
    organizations_url: "https://api.github.com/users/simoesleal/orgs",
    repos_url: "https://api.github.com/users/simoesleal/repos",
    events_url: "https://api.github.com/users/simoesleal/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/simoesleal/received_events",
    type: "User",
    site_admin: false,
    name: "Antonio Simões",
    company: "Parciom",
    blog: "",
    location: "Brazil",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 11,
    public_gists: 0,
    followers: 1,
    following: 3,
    created_at: "2015-04-21T18:39:12Z",
    updated_at: "2021-02-07T20:23:29Z",
  };

  const repos = [
    {
      id: 158817249,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTg4MTcyNDk=",
      name: "DesafioJavaDev",
      full_name: "simoesleal/DesafioJavaDev",
      private: false,
      owner: {
        login: "simoesleal",
        id: 12055630,
        node_id: "MDQ6VXNlcjEyMDU1NjMw",
        avatar_url: "https://avatars.githubusercontent.com/u/12055630?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/simoesleal",
        html_url: "https://github.com/simoesleal",
        followers_url: "https://api.github.com/users/simoesleal/followers",
        following_url:
          "https://api.github.com/users/simoesleal/following{/other_user}",
        gists_url: "https://api.github.com/users/simoesleal/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/simoesleal/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/simoesleal/subscriptions",
        organizations_url: "https://api.github.com/users/simoesleal/orgs",
        repos_url: "https://api.github.com/users/simoesleal/repos",
        events_url: "https://api.github.com/users/simoesleal/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/simoesleal/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/simoesleal/DesafioJavaDev",
      description: "Desafio desenvolvedor Java Full Stack",
      fork: false,
      url: "https://api.github.com/repos/simoesleal/DesafioJavaDev",
      forks_url: "https://api.github.com/repos/simoesleal/DesafioJavaDev/forks",
      keys_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/simoesleal/DesafioJavaDev/teams",
      hooks_url: "https://api.github.com/repos/simoesleal/DesafioJavaDev/hooks",
      issue_events_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/events",
      assignees_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/branches{/branch}",
      tags_url: "https://api.github.com/repos/simoesleal/DesafioJavaDev/tags",
      blobs_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/languages",
      stargazers_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/stargazers",
      contributors_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/contributors",
      subscribers_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/subscribers",
      subscription_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/subscription",
      commits_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/merges",
      archive_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/downloads",
      issues_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/labels{/name}",
      releases_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/simoesleal/DesafioJavaDev/deployments",
      created_at: "2018-11-23T10:27:48Z",
      updated_at: "2018-11-23T10:33:45Z",
      pushed_at: "2018-11-23T10:33:43Z",
      git_url: "git://github.com/simoesleal/DesafioJavaDev.git",
      ssh_url: "git@github.com:simoesleal/DesafioJavaDev.git",
      clone_url: "https://github.com/simoesleal/DesafioJavaDev.git",
      svn_url: "https://github.com/simoesleal/DesafioJavaDev",
      homepage: null,
      size: 26,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
  ];

  const usernameParm = { username: "simoesleal" };

  describe("getUsers(since, per_page)", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    test("should return an list of github users", async () => {
      UserDataSource.getUsers.mockImplementation(() => listOfUsers);

      const users = await UserService.getUsers(0, 2);
      expect.assertions(1);
      expect(users).toStrictEqual(listOfUsers);
    });

    test("should throw an error", async () => {
      UserDataSource.getUsers.mockRejectedValueOnce(
        new Error("Error while getting the list of users")
      );
      expect.assertions(1);
      await expect(UserService.getUsers(0, 2)).rejects.toThrow(
        /^Error while getting the list of users/
      );
    });
  });

  describe("getUser({username})", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    test("should return a single github user", async () => {
      UserDataSource.getUser.mockImplementation(() => user);

      const oneUser = await UserService.getUser(usernameParm);
      expect.assertions(1);
      expect(oneUser).toStrictEqual(user);
    });

    test("should throw an error", async () => {
      UserDataSource.getUser.mockRejectedValueOnce(
        new Error("Error while getting the user by username.")
      );
      expect.assertions(1);
      await expect(UserService.getUser(usernameParm)).rejects.toThrow(
        /^Error while getting the user by username./
      );
    });
  });

  describe("getUserRepos({username})", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    test("should return a single github user", async () => {
      UserDataSource.getUserRepos.mockImplementation(() => repos);

      const repositories = await UserService.getUserRepos(usernameParm);
      expect.assertions(1);
      expect(repositories).toStrictEqual(repos);
    });

    test("should throw an error", async () => {
      UserDataSource.getUserRepos.mockRejectedValueOnce(
        new Error("Error while getting the user repositories.")
      );
      expect.assertions(1);
      await expect(UserService.getUserRepos(usernameParm)).rejects.toThrow(
        /^Error while getting the user repositories./
      );
    });
  });

  describe("getUserDetails({username})", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    test("should return a single github user", async () => {
      UserDataSource.getUser.mockImplementation(() => user);
      const userDetails = await UserService.getUserDetails(usernameParm);
      expect.assertions(1);
      expect(userDetails).toStrictEqual(user);
    });

    test("should throw an error", async () => {
      UserDataSource.getUser.mockRejectedValueOnce(
        new Error("Error while getting the user by username.")
      );
      expect.assertions(1);
      await expect(UserService.getUserDetails(usernameParm)).rejects.toThrow(
        /^Error while getting the user by username./
      );
    });
  });

  describe("getCompleteUser({username})", () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    test("should return a single github user", async () => {
      UserDataSource.getUser.mockImplementation(() => user);
      UserDataSource.getUserRepos.mockImplementation(() => repos);
      const completeInfo = await UserService.getCompleteUser(usernameParm);
      expect.assertions(1);
      expect(completeInfo).toStrictEqual({ user, repos });
    });

    test("should throw an error", async () => {
      UserDataSource.getUser.mockRejectedValueOnce(
        new Error("Error while getting the user by username.")
      );
      expect.assertions(1);
      await expect(UserService.getCompleteUser(usernameParm)).rejects.toThrow(
        /^Error while getting the user by username./
      );
    });
  });
});
