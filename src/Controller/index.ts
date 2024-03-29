import pdfkit from 'pdfkit'
import fs from 'fs'
import userModel from '../models/UserModel';
// import dns from 'dns'
// import url from 'url'


// const checkUrl=new URL('https://afobaje.disha.page').hostname

// const dnsLookup = dns.lookup(checkUrl, function (err, address) {
//     if (!address) {
//         console.error(err, 'as')
//     }
// })
// console.log(dnsLookup, 'check',  'mid')

export function createPdf() {
    const info = {
        Title: 'Resume application',
        Author: 'David Ikukoyi',
        Subject: 'Resume Application',
        CreationDate: new Date()
    };
    const permissions = {
        copying: false,
        contentAccessibility: false
    }
    const doc = new pdfkit({ userPassword: 'afobaje', info: info, permissions: permissions });


    doc.pipe(fs.createWriteStream('School.pdf'))
    doc.fontSize(25).text('Hello World, I need money to marry this beautiful girl')
    console.log('creating pdf')
    // 
    doc.end()
}


export async function getUserWithUsername(req: any, res: any) {
    const username = req.params.username
    const userData = await userModel.findOne({ 'user.username': username })
    res.send(userData)
}


export async function getAllUsers(req: any, res: any) {
    const user = await userModel.find()
    res.send(user)
}

export async function createUser(req: any, res: any, next: any) {
    if (!req.body) {
        res.status(400)
        throw new Error('kindly provide a parameter')
    } else {
        console.log(req.body, 'jireh')
        const newUser = await userModel.create({
            id: req.body.id || 0,
            user: {
                name: req.body.name || "",
                email: req.body.email || "",
                image: req.body.image || "",
            }

        });
        res.status(200).json(newUser)
        next()
    }
}

export async function updateUserProjects(req: any, res: any) {
    const id = req.params.id
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('user not found')
    }
    const { body } = req
    const updatedUserProjects = await userModel.findOneAndUpdate({ id }, { $push: { project: body } })
    res.send(updatedUserProjects)
}


export async function updateUserEducation(req: any, res: any) {
    const id = req.params.id
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('Couldnt update education')
    }
    const { body } = req
    const updatedUserEducation = await userModel.findOneAndUpdate({ id }, { $push: { education: body } })
    res.send(updatedUserEducation)
}

export async function updateUserWorkExperience(req: any, res: any) {
    const id = req.params.id
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('couldnt update work experience')
    }
    const { body } = req
    const updatedUserWorkExperience = await userModel.findOneAndUpdate({ id }, { $push: { work: body } })
    res.send(updatedUserWorkExperience)
}


export async function updateUserAward(req: any, res: any) {
    const id = req.params.id
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('couldnt update award')
    }
    const { body } = req
    const updatedUserAward = await userModel.findOneAndUpdate({ id }, { $push: { award: body } })
    res.send(updatedUserAward)
}



export async function updateUserVolunteerExperience(req: any, res: any) {
    const id = req.params.id
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('couldnt update volunteer')
    }
    const { body } = req
    const updatedUserVolunteerExperience = await userModel.findOneAndUpdate({ id }, { $push: { volunteer: body } })
    res.send(updatedUserVolunteerExperience)
}


export async function registerUsername(req: any, res: any) {
    const id = req.params.id
    console.log(id, req.body, 'didi')
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('couldnt register username')
    }
    const { body: { username } } = req
    console.log(username, 'friendxone')

    const updateUserWithUsername = await userModel.findOneAndUpdate({ id }, { $set: { 'user.username': username } })
    res.send(updateUserWithUsername)
}

export async function updateUserProfile(req: any, res: any) {
    const id = req.params.id
    console.log(id, 'hustle from monday to sunday')
    const findUser = await userModel.findOne({ id })
    if (!findUser) {
        res.status(400)
        throw new Error('User not found')
    }
    const { body } = req
    const updatedUserProfile = await userModel.findOneAndUpdate({ id }, { $set: { "user": body } }, { new: true });
    res.send(updatedUserProfile)
}


