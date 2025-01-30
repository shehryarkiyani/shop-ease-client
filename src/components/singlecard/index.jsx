
import PropTypes from 'prop-types'

 export const Singlecard = ({Highestprice,Condition,Name,Usedstartingat,src=true,  cardClassName = '',titleClassName='', parentdivClassName=''}) => {
  return (
    <div>
       <div className={`flex   w-56 h-96 ${parentdivClassName}`} >
          <div className={`border flex flex-col justify-between h-[350px] w-56 px-2 ${cardClassName}`}>
           {src && <img className="h-52 object-contain bg-[#F5F5F5]" src={src} alt={Name} />}
           {Name&& <h2 className={`${titleClassName}`}> {Name}</h2>}

           {Condition&& <h2>Condition: {Condition}</h2>}
          {Highestprice&&  <h2> Price: {Highestprice} </h2>}
           {Usedstartingat&& <h2> Used Starting At: {Usedstartingat} </h2>}
          </div>
        </div>
    </div>
  )
}

Singlecard.propTypes={
    Highestprice:PropTypes.number.isRequired,
    Condition:PropTypes.string.isRequired,
    Name:PropTypes.string.isRequired,
    Usedstartingat:PropTypes.string.isRequired,
    src:PropTypes.string.isRequired,
    cardClassName: PropTypes.string,
    titleClassName:PropTypes.string,
    parentdivClassName:PropTypes.string,

}

