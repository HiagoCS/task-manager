import {http} from './config';

export default{
    index:() =>{
        return http.get('user/');
    },
    status:async(id) =>{
        const response = await http.get(`task/status/${id}`)
            .catch(err =>{
                return err.code;
            });
        return response.data;
    },
    userDelete:async(id) =>{
        const response = await http.delete(`user/delete/${id}`)
        .catch(err => {
            return err.code;
        });
        return response.data;
    },
    userInsert: async(data)=>{
        const response = await http.post('user/new', data)
            .catch(err => {
                return err.code;
            });
        return response.data;
    }
}