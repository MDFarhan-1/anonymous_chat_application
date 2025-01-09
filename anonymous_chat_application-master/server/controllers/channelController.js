const Channel = require('../models/Channel');
const Message = require('../models/Message');
const Users = require('../models/UserModel');

const mongoose = require('mongoose');
// Fetch all channels
exports.getAllChannels = async (req, res) => {
    try {
        const channels = await Channel.find();
        res.status(200).json({ success: true, channels });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get messages of a specific channel
exports.getChannelMessages = async (req, res) => {
    const { channelId } = req.params;
    
    try {
        // Validate and convert channelId to ObjectId
        if (!mongoose.Types.ObjectId.isValid(channelId)) {
            return res.status(400).json({ success: false, message: "Invalid Channel ID" });
        }

        const messages = await Message.find({ channelId: new mongoose.Types.ObjectId(channelId) }).populate('userId', 'name');

        res.status(200).json({ success: true, messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// Create a new channel
exports.createChannel = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newChannel = await Channel.create({ name, description });
        res.status(201).json({ success: true, channel: newChannel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Post a new message in a channel
exports.postMessage = async (req, res) => {
    const { channelId } = req.params;
    const { userId,content } = req.body; // Assume userId is passed via the frontend
    try {
        const newMessage = await Message.create({ channelId,userId, content });
        res.status(201).json({ success: true, message: newMessage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};