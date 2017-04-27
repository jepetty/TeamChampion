'use strict';

sortingApp.service('surveyQuestions', function () {
    var surveyName = "";
    var surveyDescription = 'HELLO JESSICA YOU DA BEST';
    var maxSkills = null;
    var desiredSkills = ['Java', 'Python', 'PHP', 'C/C++', 'Mobile App Development (Android/iOS)', 'Web Applications', 'Embedded Systems', 'Database (MySQL, SQL, etc.)', 'User Interface/Experience', 'Statistics', 'Networking',
        'Robotics', 'Computer Vision', 'Algorithms', 'Machine Learning'];
    var studentCount = null;
    var groupSizes = {
        min: null,
        max: null,
        opt: null
    };
    var firstName = {
        included: true,
        required: true
    };
    var lastName = {
        included: true,
        required: true
    };
    var preferredName = {
        included: true,
        required: false
    };
    var overallGPA = {
        included: true,
        required: true
    };
    var csGPA = {
        included: true,
        required: true
    };
    var skillCategories = {
        expert: true,
        good: true,
        basic: true,
        none: true
    };
    var overallProgramming = {
        included: true,
        required: true
    };
    var databaseDevelopment = {
        included: true,
        required: true
    };
    var embeddedSystems = {
        included: true,
        required: true
    };
    var webApplications = {
        included: true,
        required: true
    };
    var mobileApplications = {
        included: true,
        required: true
    };
    var userInterface = {
        included: true,
        required: true
    };
    var statistics = {
        included: true,
        required: true
    };
    var networking = {
        included: true,
        required: true
    };
    var security = {
        included: true,
        required: true
    };
    var robotics = {
        included: true,
        required: true
    };
    var computerVision = {
        included: true,
        required: true
    };
    var algorithms = {
        included: true,
        required: true
    };
    var machineLearning = {
        included: true,
        required: true
    };
    var projectPreferences = {
        firstChoice: {
            included: true,
            required: true,
            label: 'First Choice',
            name: 'firstChoice'
        },
        firstComment: {
            included: true,
            required: false,
            label: 'First Choice Comment',
            name: 'firstComment'
        },
        secondChoice: {
            included: true,
            required: true,
            label: 'Second Choice',
            name: 'secondChoice'
        },
        secondComment: {
            included: true,
            required: false,
            label: 'Second Choice Comment',
            name: 'secondComment'
        },
        thirdChoice: {
            included: true,
            required: true,
            label: 'Third Choice',
            name: 'thirdChoice'
        },
        thirdComment: {
            included: true,
            required: false,
            label: 'Third Choice Comment',
            name: 'thirdComment'
        },
        fourthChoice: {
            included: true,
            required: true,
            label: 'Fourth Choice',
            name: 'fourthChoice'
        },
        fourthComment: {
            included: true,
            required: false,
            label: 'Fourth Choice Comment',
            name: 'fourthComment'
        },
        fifthChoice: {
            included: true,
            required: true,
            label: 'Fifth Choice',
            name: 'fifthChoice'
        },
        fifthComment: {
            included: true,
            required: false,
            label: 'Fifth Choice Comment',
            name: 'fifthComment'
        }
    };
    var ipPreference = {
        included: true,
        required: true
    };
    var ipOptions = {
        retain: 'Prefer to retain IP rights to my work',
        retainIncluded: true,
        depends: 'Depends on the project',
        dependsIncluded: true,
        noPref: 'I don\'t have a preference to retain IP rights to my work',
        noPrefIncluded: true
    };
    var leadership = {
        included: true,
        required: true,
        important: true
    };
    var leadershipOptions = {
        strongFollow: 'Strongly prefer to be a follower rather than a leader',
        strongFollowIncluded: true,
        preferFollow: 'Prefer to be a follower, but will lead when necessary',
        preferFollowIncluded: true,
        equalLead: 'Enjoy leading and following equally',
        equalLeadIncluded: true,
        preferLead: 'Prefer to be a leader, but will follow when necessary',
        preferLeadIncluded: true,
        strongLead: 'Strongly prefer to be the leader; do not enjoy being a follower',
        strongLeadIncluded: true
    };
    var preferredPartners = {
        included: true,
        required: false
    };
    var bannedPartners = {
        included: true,
        required: false
    };
    var maxScore = null;
    var changeRatings = false;
    var weights = {
        known: null,
        learn: null,
        group: null,
        ip: null,
        extraCredit: null
    };

    return {
        getSurveyName: function () {
            return surveyName;
        },
        setSurveyName: function (value) {
            surveyName = value;
        },

        getSurveyDescription: function () {
            return surveyDescription;
        },
        setSurveyDescription: function (value) {
            surveyDescription = value;
        },

        getStudentCount: function () {
            return studentCount;
        },
        setStudentCount: function (value) {
            studentCount = value;
        },

        getGroupSizes: function () {
            return groupSizes;
        },
        setGroupSizes: function (value) {
            groupSizes = value;
        },
        setGroupSize: function (field, value) {
            groupSizes[field] = value;
        },

        getMaxSkills: function () {
            return maxSkills;
        },
        setMaxSkills: function (value) {
            maxSkills = value;
        },

        getDesiredSkills: function () {
            return desiredSkills;
        },
        setDesiredSkills: function (value) {
            desiredSkills = value;
        },

        getProjects: function () {
            return projects;
        },
        setProjects: function (value) {
            projects = value;
        },

        getFirstName: function () {
            return firstName;
        },
        setFirstName: function (value) {
            firstName = value;
        },

        getLastName: function () {
            return lastName;
        },
        setLastName: function (value) {
            lastName = value;
        },

        getPreferredName: function () {
            return preferredName;
        },
        setPreferredName: function (value) {
            preferredName = preferredName;
        },

        getOverallGPA: function () {
            return overallGPA;
        },
        setOverallGPA: function (value) {
            overallGPA = value;
        },

        getCsGPA: function () {
            return csGPA;
        },
        setCsGPA: function (value) {
            csGPA = value;
        },

        getSkillCategories: function () {
            return skillCategories;
        },
        setSkillCategories: function (value) {
            skillCategories = value;
        },

        getOverallProgramming: function () {
            return overallProgramming;
        },
        setOverallProgramming: function (value) {
            overallProgramming = value;
        },

        getDatabaseDevelopment: function () {
            return databaseDevelopment;
        },
        setDatabaseDevelopment: function (value) {
            databaseDevelopment = value;
        },

        getEmbeddedSystems: function () {
            return embeddedSystems;
        },
        setEmbeddedSystems: function (value) {
            embeddedSystems = value;
        },

        getWebApplications: function () {
            return webApplications;
        },
        setWebApplications: function (value) {
            webApplications = value;
        },

        getMobileApplications: function () {
            return mobileApplications;
        },
        setMobileApplications: function (value) {
            mobileApplications = value;
        },

        getUserInterface: function () {
            return userInterface;
        },
        setUserInterface: function (value) {
            userInterface = value;
        },

        getStatistics: function () {
            return statistics;
        },
        setStatistics: function (value) {
            statistics = value;
        },

        getNetworking: function() {
            return networking;
        },
        setNetworking: function(value) {
            networking = value;
        },

        getSecurity: function() {
            return security;
        },
        setSecurity: function (value) {
            security = value;
        },

        getRobotics: function () {
            return robotics;
        },
        setRobotics: function (value) {
            robotics = value;
        },

        getComputerVision: function () {
            return computerVision;
        },
        setComputerVision: function (value) {
            computerVision = value;
        },

        getAlgorithms: function () {
            return algorithms;
        },
        setAlgorithms: function (value) {
            algorithms = value;
        },

        getMachineLearning: function () {
            return machineLearning;
        },
        setMachineLearning: function (value) {
            machineLearning = value;
        },

        getProjectPreferences: function () {
            return projectPreferences;
        },
        setProjectPreferences: function (value) {
            projectPreferences = value;
        },

        getIpPreference: function () {
            return ipPreference;
        },
        setIpPreference: function (value) {
            ipPreference = value;
        },

        getIpOptions: function () {
            return ipOptions;
        },
        setIpOptions: function (value) {
            ipOptions = value;
        },

        getLeadership: function () {
            return leadership;
        },
        setLeadership: function (value) {
            leadership = value;
        },
        setLeadershipValue: function (field, value) {
            leadership[field] = value;
        },

        getLeadershipOptions: function () {
            return leadershipOptions;
        },
        setLeadershipOptions: function (value) {
            leadershipOptions = value;
        },

        getPreferredPartners: function () {
            return preferredPartners;
        },
        setPreferredPartners: function (value) {
            preferredPartners = value;
        },

        getBannedPartners: function () {
            return bannedPartners;
        },
        setBannedPartners: function (value) {
            bannedPartners = value;
        },

        getMaxScore: function () {
            return maxScore;
        }, 
        setMaxScore: function (value) {
            maxScore = value;
        },

        getChangeRatings: function () {
            return changeRatings;
        },
        setChangeRatings: function (value) {
            changeRatings = value;
        },

        getWeights: function () {
            return weights;
        },
        setWeights: function (value) {
            weights = value;
        },
        setWeight: function (field, value) {
            weights[field] = value;
        }
    }
})