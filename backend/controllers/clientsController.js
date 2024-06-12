import User from "../models/User.js";
import Client from "../models/Client.js";


class clientsController  {
    async create(req,res) {
        try {
            const {name,responsiblePerson,status} = req.body
            const client = new Client({name,responsiblePerson,status})
            await client.save()
            console.log('Client recorded')
            res.status(201).json({ message: 'Client recorded successfully' });
        } catch (e) {
            console.log(e)
            res.status(501).json({message:'Client recorded error'})
        }
    }
    async get(req,res) {
        try {
            const userId = req.params.userId
            console.log(userId)
            const user = await User.findById(userId)
            console.log(user)
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const clients = await Client.find({responsiblePerson: user.fio})
            res.json(clients)
        } catch (e) {
            console.log(e)
            res.status(501).json({message:'Get clients error'})
        }
    }
    async update(req,res) {
        try {
            const clientId = req.params.clientId
            const { status } = req.body
            const client = await Client.findByIdAndUpdate(clientId,{ status }, { new:true })
            if(!client) res.status(404).json({message:"Client not found"})
            res.json(client)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Error updating client' });
        }
    }
}

export default new clientsController()