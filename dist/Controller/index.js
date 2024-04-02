"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.checkIfUserExists = exports.registerUsername = exports.updateUserVolunteerExperience = exports.updateUserAward = exports.updateUserWorkExperience = exports.updateUserEducation = exports.updateUserProjects = exports.createUser = exports.getAllUsers = exports.getUserWithUsername = exports.createPdf = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
// import dns from 'dns'
// import url from 'url'
// const checkUrl=new URL('https://afobaje.disha.page').hostname
// const dnsLookup = dns.lookup(checkUrl, function (err, address) {
//     if (!address) {
//         console.error(err, 'as')
//     }
// })
// console.log(dnsLookup, 'check',  'mid')
function createPdf() {
    const info = {
        Title: 'Resume application',
        Author: 'David Ikukoyi',
        Subject: 'Resume Application',
        CreationDate: new Date()
    };
    const permissions = {
        copying: false,
        contentAccessibility: false
    };
    const doc = new pdfkit_1.default({ userPassword: 'afobaje', info: info, permissions: permissions });
    doc.pipe(fs_1.default.createWriteStream('School.pdf'));
    doc.fontSize(25).text('Hello World, I need money to marry this beautiful girl');
    console.log('creating pdf');
    // 
    doc.end();
}
exports.createPdf = createPdf;
function getUserWithUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.params.username;
        const userData = yield UserModel_1.default.findOne({ 'user.username': username });
        res.send(userData);
    });
}
exports.getUserWithUsername = getUserWithUsername;
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserModel_1.default.find();
        res.send(user);
    });
}
exports.getAllUsers = getAllUsers;
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            res.status(400);
            throw new Error('kindly provide a parameter');
        }
        else {
            console.log(req.body, 'jireh');
            const newUser = yield UserModel_1.default.create({
                id: req.body.id || 0,
                user: {
                    name: req.body.name || "",
                    email: req.body.email || "",
                    image: req.body.image || "",
                }
            });
            res.status(200).json(newUser);
            next();
        }
    });
}
exports.createUser = createUser;
function updateUserProjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('user not found');
        }
        const { body } = req;
        const updatedUserProjects = yield UserModel_1.default.findOneAndUpdate({ id }, { $push: { project: body } });
        res.send(updatedUserProjects);
    });
}
exports.updateUserProjects = updateUserProjects;
function updateUserEducation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('Couldnt update education');
        }
        const { body } = req;
        const updatedUserEducation = yield UserModel_1.default.findOneAndUpdate({ id }, { $push: { education: body } });
        res.send(updatedUserEducation);
    });
}
exports.updateUserEducation = updateUserEducation;
function updateUserWorkExperience(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('couldnt update work experience');
        }
        const { body } = req;
        const updatedUserWorkExperience = yield UserModel_1.default.findOneAndUpdate({ id }, { $push: { work: body } });
        res.send(updatedUserWorkExperience);
    });
}
exports.updateUserWorkExperience = updateUserWorkExperience;
function updateUserAward(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('couldnt update award');
        }
        const { body } = req;
        const updatedUserAward = yield UserModel_1.default.findOneAndUpdate({ id }, { $push: { award: body } });
        res.send(updatedUserAward);
    });
}
exports.updateUserAward = updateUserAward;
function updateUserVolunteerExperience(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('couldnt update volunteer');
        }
        const { body } = req;
        const updatedUserVolunteerExperience = yield UserModel_1.default.findOneAndUpdate({ id }, { $push: { volunteer: body } });
        res.send(updatedUserVolunteerExperience);
    });
}
exports.updateUserVolunteerExperience = updateUserVolunteerExperience;
function registerUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        console.log(id, req.body, 'didi');
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('couldnt register username');
        }
        const { body: { username } } = req;
        const updateUserWithUsername = yield UserModel_1.default.findOneAndUpdate({ id }, { $set: { 'user.username': username } });
        res.send(updateUserWithUsername);
    });
}
exports.registerUsername = registerUsername;
function checkIfUserExists(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.params.email;
        const findMail = yield UserModel_1.default.findOne({ 'user.email': email });
        if (findMail) {
            res.send({ message: 'user exists' });
        }
    });
}
exports.checkIfUserExists = checkIfUserExists;
function updateUserProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        console.log(id, 'hustle from monday to sunday');
        const findUser = yield UserModel_1.default.findOne({ id });
        if (!findUser) {
            res.status(400);
            throw new Error('User not found');
        }
        const { body } = req;
        const updatedUserProfile = yield UserModel_1.default.findOneAndUpdate({ id }, { $set: { "user": body } }, { new: true });
        res.send(updatedUserProfile);
    });
}
exports.updateUserProfile = updateUserProfile;
//# sourceMappingURL=index.js.map