'use client'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Card = ({ name, age, text }) => {
    return (
      
      <div className="bg-white p-6 rounded-lg shadow-md flex w-auto h-36 gap-3">
        <div className="flex-shrink-0">
          <p className="text-Azul/900 text-base font-semibold">{name}</p>
          <p className="text-Grises/500 text-sm font-normal ">{age}</p>
        </div>
        <div className="flex w-80 h-24 gap-4">
          <p className="text-black text-base font-normal">{text}</p>
        </div>
      </div>

    );
  };

const Testimonials = () => {
    const usuarios = [
        {
            name: 'Andrés M.',
            age: '18 años',
            text: '"Empecé a trabajar hace poco y CountryPay ha hecho que gestionar mi dinero sea un juego de niños. Me encanta la seguridad y lo fácil que es de usar."'
        },
        {
            name: 'Sara L.',
            age: '22 años',
            text: '"Soy fan de la idea de no necesitar una cuenta bancaria para transferencias. CountryPay ha revolucionado la forma en que manejo mis finanzas. ¡Adiós a las complicaciones!"'
        },
        {
            name: 'María G.',
            age: '35 años',
            text: '"Soy emprendedora y CountryPay me ha facilitado muchísimo cobrar a mis clientes y pagarle a mis proveedores de forma rápida y segura."'
        },
        {
          name: 'Nicolás J.',
          age: '23 años',
          text: '"Empecé a trabajar hace poco y CountryPay ha hecho que gestionar mi dinero sea un juego de niños. Me encanta la seguridad y lo fácil que es de usar."'
      },
      {
          name: 'Mariela C.',
          age: '29 años',
          text: '"Soy fan de la idea de no necesitar una cuenta bancaria para transferencias. CountryPay ha revolucionado la forma en que manejo mis finanzas. ¡Adiós a las complicaciones!"'
      },
      {
          name: 'Ignacio L.',
          age: '32 años',
          text: '"Soy emprendedora y CountryPay me ha facilitado muchísimo cobrar a mis clientes y pagarle a mis proveedores de forma rápida y segura."'
      }
    ];

    const scrollLeft = () => {
      document.getElementById("testimonio").scrollLeft -= 900;
    }
    const scrollRight = () => {
        document.getElementById("testimonio").scrollLeft += 900;
    }

    return(
      <div className='w-full mx-auto mt-5 flex' layout="responsive">
        <div className=" relative rounded-full bg-Grises/100 w-12 h-12 flex justify-center items-center my-auto px-4 mx-2">
          <button onClick={scrollLeft}><FiChevronLeft /></button>
        </div>

        <div id="testimonio" className="flex flex-row overflow-x-auto space-x-4 scroll-smooth scrollbar-hide">
            {usuarios.map((usuario, index) => (
                    <Card key={index} name={usuario.name} age={usuario.age} text={usuario.text} />
                )
            )}
        </div>

        <div className=" relative rounded-full bg-Grises/100 w-12 h-12 flex justify-center items-center my-auto px-4 mx-2 right-0">
          <button onClick={scrollRight}><FiChevronRight /></button>
        </div>
      </div>
    )
}

export default Testimonials