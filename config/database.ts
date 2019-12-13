import mongoose from 'mongoose'  
mongoose.connect('mongodb+srv://boottodo:boottodo@cluster0-xai5k.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
export default mongoose