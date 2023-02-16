import inquirer from "inquirer";
import colors from 'colors'

const preguntas=[
    {
        type:'list',
        name:'opcion',
        message:'¿Qué desea hacer?',
        choices:[
            {
                value:1,
                name:"1.-Buscar Ciudad"
            },
            {
                value:2,
                name:"2.-Historial"
            },
            {
                value:0,
                name:"0.-Salir"
            },
        ]
    }
]

const question=[
    {
        type:'input',
        name:'enter',
        message:'Presione ENTER para continuar'
    }
]

export const inquirerMenu=async()=>{
    console.clear()
    console.log('========================================'.green)
    console.log('========================================'.green)
    console.log('        Seleccione una opcion           '.white)
    console.log('========================================'.green)
    console.log('========================================\n'.green)
    const {opcion}=await inquirer.prompt(preguntas)
    return opcion
}

export const pausa=async()=>{
    
    await inquirer.prompt(question)
}

export const listarLugares=async(lugares=[])=>{
    const choices=lugares.map((lugar,i)=>{
        const idx=`${i+1}.`.green;
        return{
            value:lugar.id,
            name:`${idx} ${lugar.nombre}`
        }
    })
    choices.unshift({
        value:'0',
        name:'0.'.green + 'Cancelar'
    })
    const preguntas=[
        {
            type:'list',
            name:'id',
            message:'Seleccionar el Lugar ',
            choices
        }
    ]
    const {id}=await inquirer.prompt(preguntas)
    return id
}

export const confirmar=async(message)=>{
    const question=[
        {
            type:'confirm',
            name:'ok',
            message
        }
    ]
    const {ok}=await inquirer.prompt(question)
    return ok
}

export const leerInput=async(message)=>{
    const opciones=[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length===0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const {desc}=await inquirer.prompt(opciones)
    return desc
}

export const mostrarListadoCheckList=async(tareas=[])=>{
    const choices=tareas.map((tarea,i)=>{
        const idx=`${i+1}.`.green;
        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`,
            checked:(tarea.compleadoEn) ? true : false
        }
    })
    const preguntas=[
        {
            type:'checkbox',
            name:'ids',
            message:'Seleccione ',
            choices
        }
    ]
    const {ids}=await inquirer.prompt(preguntas)
    return ids
}