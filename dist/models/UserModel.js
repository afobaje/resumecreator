"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const AwardSchema = new Schema({
    awardTitle: String,
    yearOfAward: Number,
    presented: String,
    url: String,
    description: String
});
const EducationSchema = new Schema({
    fromEdu: Number,
    toEdu: Number,
    degree: String,
    school: String,
    location: String,
    url: String,
    description: String
});
const ProjectSchema = new Schema({
    companyOrClient: String,
    description: String,
    titleOfProject: String,
    website: String,
    yearOfProject: String
});
const WorkSchema = new Schema({
    company: String,
    description: String,
    location: String,
    title: String,
    url: String,
    workFrom: String,
    workto: String
});
const VolunteerSchema = new Schema({
    company: String,
    description: String,
    location: String,
    title: String,
    url: String,
    volunteerfrom: String,
    volunteerto: String
});
const CertificationSchema = new Schema({
    issued: Number,
    expires: Number,
    name: String,
    Organization: String,
    url: String,
    Description: String
});
const UserSchema = new Schema({
    name: { type: String, required: true, default: undefined },
    email: { type: String, unique: true, required: true, default: undefined },
    image: { type: String, default: undefined },
    username: { type: String, default: undefined },
    occupation: { type: String, default: undefined },
    location: { type: String, default: undefined },
    website: { type: String, default: undefined },
    about: { type: String, default: undefined }
});
const UserModelSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    user: { type: UserSchema, default: undefined },
    education: { type: [EducationSchema], default: undefined },
    certification: { type: [CertificationSchema], default: undefined },
    volunteer: { type: [VolunteerSchema], default: undefined },
    award: { type: [AwardSchema], default: undefined },
    work: { type: [WorkSchema], default: undefined },
    project: { type: [ProjectSchema], default: undefined },
    createdOn: { type: Date, default: Date.now },
});
const userModel = model('user', UserModelSchema);
exports.default = userModel;
//# sourceMappingURL=UserModel.js.map