import {http} from './config';

export default{
    index:() =>{
        return http.get('tasks/');
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
    }
}