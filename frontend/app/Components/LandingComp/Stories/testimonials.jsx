

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
        }
    ];

    return(
        <div className="flex flex-row overflow-x-auto space-x-4">
            {usuarios.map((usuario, index) => (
                    <Card key={index} name={usuario.name} age={usuario.age} text={usuario.text} />
                )
            )}          
        </div>
    )
}

export default Testimonials