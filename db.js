import mongoose from 'mongoose'

import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

async function connectDB(){
	try {
		await mongoose.connect(process.env.MONGO)
		console.log("MongoDB Connected with Mongoose!")
	} catch(e) {
		console.error(e)
	}
}

export default connectDB