import React from 'react'
import { Table } from 'antd'
const Cars = () => {


    const dataSource = [
        {
            key: '1',
            Type : 'Jeep Renegade',
            Model : "BU-520" ,
            ModelYear: 2014 ,
            Logo: '/media/jeep.jpg ',
            Image : '/media/Jeep_Renegade_--_Auto_China_--_2014-04-23.jpg' 
        },
        
        {
            key: '2',
            Type : 'Sedan',
            Model : "Honda Accord" ,
            ModelYear: 2024,
            Logo: '/media/2b2e24182ec095838e1ae00af272dffb.jpg' ,
            Image : '/media/2024-honda-accord-renderings.jpg' 
        },
        
        {
            key: '3',
            Type : 'SUV',
            Model : "Toyota RAV4" ,
            ModelYear: 2024,
            Logo: "/media/png-clipart-toyota-rav4-used-car-toyota-kirloskar-motor-cars-logo-brands-emblem-text.png" ,
            Image : "/media/2024_toyota_rav4-hybrid_4dr-suv_se_fq_oem_1_1280.avif"
        },
        
        {
            key: '4',
            Type : 'chevrolet',
            Model : "Chevrolet Spark" ,
            ModelYear: 2022,
            Logo: "/media/2b2e24182ec095838e1ae00af272dffb.jpg",
            Image : "/media/2022_chevrolet_spark_angularfront.jpg" 
        },
        
        {
            key: '5',
            Type : 'Nissan',
            Model : "Nissan Rogue " ,
            ModelYear: 2022,
            Logo: "/media/images.jpg" ,
            Image : "/media/2022-nissan-rogue-sport-1630609852.jpg" 
        },
        
        ];
        
        const columns = [
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'Model',
            dataIndex: 'Model',
            key: 'Model',
        },
        {
            title: 'ModelYear',
            dataIndex: 'ModelYear',
            key: 'ModelYear',
        },
        {
            title: 'Logo',
            dataIndex: 'Logo',
            key: 'Logo',
            render: (val , record) =>{
                console.log(val ,record)
                return <img src ={val} style={{width : "60px"}} />}
        },
        {
            title: 'Image',
            dataIndex: 'Image',
            key: 'Image',
            render: (val) =>{
                return <img src ={val} style={{width : "70px"}} />}
        },
        ];
            
        
    return (
    <div>
        <h1>Cars Models</h1>
        <Table style={{width : "95%"}}  dataSource={dataSource} columns={columns} />;
    </div>
  )
}

export default Cars
