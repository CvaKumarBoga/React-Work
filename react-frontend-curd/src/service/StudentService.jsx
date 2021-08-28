import axios from "axios";

const BaseUrl= "http://localhost:2021/backend/student";

class StudentService  {

   getAllStudents() {
        return axios.get(`${BaseUrl}/allstudents`);
    }

    createStudent(student){
        return axios.post(`${BaseUrl}/create`,student);
    }

    deleteStudent(id){
        return axios.delete(`${BaseUrl}/delete/${id}`);
    }
    
}

export default new StudentService()
