import Category from '../components/category'
import Title from '../components/Title'
import Image from 'next/image'


export async function getStaticProps() {
    // Data Fetching
    const res = await fetch("https://fakestoreapi.com/products?limit=30")
    const data = await res.json()
    console.log(data[0].price)
    return {
        props: {
            data
        }
    }
}
/*module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
}
*/
export default function Productlist({ data }) {
    //  console.log(data)

    return (
        <>
            <div>

                <Title title="Product list" />
                <Category />

                <div className="card">

                </div>

                {data.map((data, i) => (
                    <div key={i}>
                        {/* <img src={data.image} width={200} height={200} /> */}
                        {/* <Image src={data?.image} width={200} height={200}></Image> */}
                        <h1 >{data.title}</h1>
                        <h3 className="price">${data.price}</h3>
                        <h4>{data.category}</h4>
                        <p>{data.description}</p>
                        <p><button>Add to Cart</button></p>
                    </div>

                ))}




                {/*  <div className="card">
        <Image src="/https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={200} height={200} />
        <h1>Pant</h1>
        <p class="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
    </div>
    <div className="card">
        <Image src="/../public/images/lungi.jpg" width={50} height={300} />
        <h1>Lungi</h1>
        <p class="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
    </div>
    <div className="card">
        <Image src="/../public/images/shirt.jpg" width={50} height={300} />
        <h1>Shirt</h1>
        <p class="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
    </div>
    */}


            </div>
        </>
    )
}