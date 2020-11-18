import React, { Component } from 'react';
// import carItems from './Data'
import Client from './Contentful';


const CarContext = React.createContext();


class CarProvider extends Component {
    state = {
            allCars: [],
            sortedCars: [],
            featuredCars: [], // boolean in data.js
            loading: true,
            type: "all",
            price: 0,
            transmission: "all",
            maxPrice: 0,
            minPrice: 0,
            maxAmount: 0,
            minAmount: 0
    };

    

    getData = async() => {
        try{
            let response = await Client.getEntries({
                content_type: "carDealerContentModel",
                order: "fields.name"
            });

        let allCars = this.formatData(response.items);
        console.log(allCars)
        let featuredCars = allCars.filter(car => car.featured === true);
        let maxPrice = Math.max(...allCars.map(item => item.price));
        let maxAmount = Math.max(...allCars.map(item => item.maxAmount));

        this.setState({
            allCars,
            sortedCars: allCars,
            featuredCars,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxAmount

        });

            } catch (error){
            console.log(error)
        }
    }

    componentDidMount () {
        this.getData();
        

        // let allCars = this.formatData(carItems);
        // let featuredCars = allCars.filter(car => car.featured === true);
        // let maxPrice = Math.max(...allCars.map(item => item.price));
        // let maxAmount = Math.max(...allCars.map(item => item.maxAmount));

        // this.setState({
        //     allCars,
        //     sortedCars: allCars,
        //     featuredCars,
        //     loading: false,
        //     price: maxPrice,
        //     maxPrice,
        //     maxAmount

        // });
    };
    

   formatData(paramCarData) {
       console.log(paramCarData);
        let tempData = paramCarData.map(item => {
        let id = item.sys.id;
    
        let images = item.fields.images.map((image) => image.fields.file.url);

        // create new updated Field Object as car
        let car = {...item.fields, id, images}
        return car;
        });
        return tempData;
        
    };



     getCar = (slug) => {
        let tempCar  = [...this.state.allCars];
        //i am using find because it returns an array
        const car = tempCar.find((cars) => cars.slug === slug);
        return car;
    };


    handleChange = event => {
        const target = event.target;
        const value = event.type === "checkbox"   || event.transmission  === "checkbox" ?
        target.checked : target.value;

        const name = event.target.name
       
        
        this.setState({
            [name]: value
        }, this.filterCars);
        
    };


    filterCars = () => {
        let {
            allCars,type,price,minPrice,maxPrice,minAmount,maxAmount,transmission
        } = this.state
        console.log(this.state);

            //all rooms
        let tempcars = [...allCars];

        // filter by type
        if(type !== "all"){
            tempcars = tempcars.filter(car => car.type === type)
        }


        //filter by transmission
        if(transmission !== "all"){
            tempcars = tempcars.filter(car => car.transmission === transmission)
        }

        // filter by price
        tempcars = tempcars.filter(room => room.price <= price);
        

        this.setState({
            sortedCars: tempcars
        })
    }

    
    
    render() {
        return (
            <CarContext.Provider value={{
                ...this.state, getCar: this.getCar, handleChange:this.handleChange
                }}>

                {this.props.children}
            </CarContext.Provider>
        );
    }
}

const CarConsumer = CarContext.Consumer;


//HIGHER ORDER COMPONENT FOR CONSUMER to CarsContainer
export function withCarConsumer(Component){
    return function consumerWrap(props){
        return <CarConsumer>
            {value => <Component {...props} context={value}/>}
        </CarConsumer>
    }
}




// {className, consumerObjectOfCarContext, CarContext}
export   {CarProvider, CarConsumer, CarContext};
