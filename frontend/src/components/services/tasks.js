import {http} from './config';

export default{
     index:async() =>{
        const response = await http.get('task/')
            .catch(err => {
                return err.code;
            });
        return response.data;
         
    },
    taskDelete:async(id) =>{
        const response = await http.delete(`task/delete/${id}`)
        .catch(err => {
            return err.code;
        });
        return response.data;
    },
    taskInsert: async(data)=>{
        const response = await http.post('task/new', data)
            .catch(err => {
                return err.code;
            });
        return response.data;
    },
    taskUpdate: async(id, update)=>{
        const response = await http.patch(`task/update/${id}/${update}`)
            .catch(err =>{
                return err.code;
            });
        return response.data;
    }
}