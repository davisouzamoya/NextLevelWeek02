import React, { useState, FormEvent } from 'react'

import PageHeader from './../../components/PageHeader'
import TeacherItem,{Teacher} from './../../components/TeacherItem'
import Select from '../../components/Select'
import Input from './../../components/input'
import api from '../../services/api'

import './styles.css'


 function TeacherList(){
  const [teachers,setTeacher] = useState([])

  const [subject,setSubject] = useState('')
  const [week_day,setWeekDay] = useState('')
  const [time,setTime] = useState('')

  async function searchTeachers(e:FormEvent){
    e.preventDefault()

    const response = await api.get('/classes',{
      params:{
        subject,
        week_day,
        time
      }
    })

    setTeacher(response.data)
  }

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name="subject" 
            label="Materia"
            value={subject}
            onChange={(e) =>{setSubject(e.target.value)}}
            options={[
              { value:'Artes',label:'Artes'},
              { value:'Biologia',label:'Biologia'},
              { value:'Ciencias',label:'Ciencias'},
              { value:'Geografia',label:'Geografia'},
              { value:'Matematica',label:'Matematica'},
              { value:'Portugues',label:'Portugues'},
              { value:'Ingles',label:'Ingles'},
              { value:'Educacao Fisica',label:'Educacao Fisica'},
              { value:'Historia',label:'Historia'},
              { value:'Quimica',label:'Quimica'},
            ]}
            />
            <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(e) =>{setWeekDay(e.target.value)}}
            options={[
              { value:'0',label:'Domingo'},
              { value:'1',label:'Segunda'},
              { value:'2',label:'Terca'},
              { value:'3',label:'Quarta'},
              { value:'4',label:'Quinta'},
              { value:'5',label:'Sexta'},
              { value:'6',label:'Sabado'},
              
            ]}
            />
          
          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={(e) =>{setTime(e.target.value)}}
            />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) =>{
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
    
  )
}

export default TeacherList;