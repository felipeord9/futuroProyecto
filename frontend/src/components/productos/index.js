import { useState, useEffect } from "react";
import sweal from 'sweetalert'
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import ModalAddProducts from "../../components/ModalAddProducts";
import { deleteProduct, getAllProducts } from "../../services/productService";
import { config } from "../../config";
import { Modal } from "react-bootstrap";
import Fabrica1 from '../../assest/fabrica1.png'

function VerProductos() {
  const LIMIT = 0;
  const OFFSET = 6;
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalImg, setOpenModalImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pagination, setPagination] = useState({
    limit: LIMIT,
    offset: OFFSET,
  });

  useEffect(() => {
    loadData()
  }, []);

  const loadData = () => {
    getAllProducts().then((data) => {
      setProducts(data);
      setSuggestions(data);
    });
  }

  const handlerFilter = (e) => {
    const { value } = e.target;
    const newValue = value.toLowerCase();
    const filter = products.filter((elem) => {
      if (
        elem.id.toString() === newValue ||
        elem.description.toLowerCase().includes(newValue) ||
        elem.um.toLowerCase().includes(newValue)
      ) {
        return elem;
      }
    });
    if (filter.length > 0) {
      setSuggestions(filter);
    } else {
      setSuggestions(products);
    }
    setPagination({
      limit: LIMIT,
      offset: OFFSET,
    });
  };

  const expandImg = (imgUrl) => {
    setSelectedImg(imgUrl);
    setOpenModalImg(!openModalImg);
  };

  const handlerShowModalUpdate = (product) => {
    setSelectedProduct(product)
    setOpenModalEdit(!openModalEdit)
  }

  return (
    <div className="py-3 ps-4 ">
      {/* <div className="d-flex flex-row justify-content-between mb-2">
        <div>
          <btn
            className="btn btn-success fw-bold p-2"
            onClick={(e) => setOpenModal(!openModal)}
          >
            Crear producto
          </btn>
          <ModalAddProducts openModal={openModal} setOpen={setOpenModal} loadData={loadData} />
        </div>
      </div> */}
      <h1 className="fs-5 fw-bold m-0 p-2"><strong> Catálogo De Productos</strong></h1>
      <div className="mt-3" style={{width:'30rem'}}>
        <input
          type="search"
          className="form-control"
          placeholder="Buscar producto..."
          onChange={handlerFilter}
          autoComplete="on"
          aria-autocomplete="on"
        />
      </div>
      <div className="row row-cols-lg-3 mt-3 ms-4">
        {suggestions
          .slice(pagination.limit, pagination.offset)
          .map((elem, index) => (
            <div className="justify-content-center ">
              <div
                className="card overflow-hidden my-1 "
                style={{ width: "22rem", height: "12.5rem" }}
              >
                <img
                  /* src={`${config.apiImg}/${elem?.photo}`} */
                  src={`${elem.photo}`}
                  /* src={Fabrica1} */
                  alt={`${elem.id}`}
                  height={115}
                  onClick={() => expandImg(elem.photo)}
                />
                <div class="card-body d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-column" style={{fontSize: 12}}>
                    <span className="text-body-tertiary">{elem.id} - {elem.um}</span>
                    <h5 class="card-title overflow-hidden w-100 m-0" style={{fontSize: 14}}>
                      {elem.description}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ModalAddProducts
        product={selectedProduct}
        openModal={openModalEdit}
        setOpen={setOpenModalEdit}
        loadData={loadData}
      />
      <Modal
        show={openModalImg}
        onHide={() => setOpenModalImg(!openModalImg)}
        className="d-block align-items-center"
      >
        <img
          src={`${config.apiImg}/${selectedImg}`}
          /* src={`${Fabrica1}`} */
          alt=""
          className="rounded w-100 h-100"
        />
      </Modal>
      <div
        id="pagination"
        className="d-flex flex-row justify-content-center align-items-center rounded gap-2 mt-3"
      >
        <Io.IoIosArrowBack
          className="text-body-tertiary"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            if (pagination.limit !== 0) {
              setPagination({
                limit: pagination.limit - OFFSET,
                offset: pagination.offset - OFFSET,
              });
            }
          }}
        />
        <div
          className="text-body-tertiary text-center"
          style={{ width: "10rem" }}
        >
          {`${pagination.limit + 1}-${pagination.offset} de ${
            suggestions.length
          }`}
        </div>
        <Io.IoIosArrowForward
          className="text-body-tertiary"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            if (pagination.offset < suggestions.length) {
              setPagination({
                limit: pagination.limit + OFFSET,
                offset: pagination.offset + OFFSET,
              });
            }
          }}
        />
      </div>
    </div>
  );
}

export default VerProductos;