import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { IoSearchOutline } from 'react-icons/io5'
import styles from '@/components/content.module.css'

export default function Content() {
  const [areas, setAreas] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedAreas, setSelectedAreas] = useState([])
  const [stationData, setStationData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    switch (selectedCity) {
      case '台北市':
        fetch(
          'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json',
        )
          .then((response) => response.json())
          .then((data) => {
            const uniqueAreas = [...new Set(data.map((item) => item.sarea))]
            setAreas(uniqueAreas)
            setStationData(data)
            setSelectedAreas(uniqueAreas)
          })
          .catch((error) => console.error('Error fetching data:', error))
        break
      default:
        setAreas([])
        setStationData([])
        break
    }
  }, [selectedCity])

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }

  const handleAreaChange = (event) => {
    const area = event.target.value
    const isChecked = event.target.checked

    let updatedSelectedAreas = []
    if (isChecked) {
      updatedSelectedAreas = [...selectedAreas, area]
    } else {
      updatedSelectedAreas = selectedAreas.filter(
        (selectedArea) => selectedArea !== area,
      )
    }

    setSelectedAreas(updatedSelectedAreas)

    const allAreasSelected = areas.every((area) =>
      updatedSelectedAreas.includes(area),
    )
    if (allAreasSelected) {
      document.querySelector('#all-check').checked = true
    } else {
      document.querySelector('#all-check').checked = false
    }
  }

  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setSelectedAreas(areas)
    } else {
      setSelectedAreas([])
    }
  }
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <>
      <div className="container">
        <div className={`${styles['title']} my-3`}>站點資訊</div>
        <div className="d-flex row">
          <div className={`${styles['info']} col-5`}>
            <div className={`${styles['form-group']}`}>
              <Form.Select
                className={`${styles['form-select']}`}
                aria-label="選擇縣市"
                onChange={handleCityChange}
              >
                <option>選擇縣市</option>
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="新竹縣">新竹縣</option>
                <option value="新竹市">新竹市</option>
                <option value="新竹科學園區">新竹科學園區</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="台中市">台中市</option>
                <option value="嘉義市">嘉義市</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
                <option value="屏東縣">屏東縣</option>
              </Form.Select>

              <InputGroup className={`${styles['search-group']}`}>
                <Form.Control
                  className={`${styles['input']}`}
                  placeholder="搜尋站點"
                  aria-label="搜尋站點"
                  aria-describedby="basic-addon2"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <Button className={`${styles['button']}`} id="button-addon2">
                  <IoSearchOutline />
                </Button>
              </InputGroup>
            </div>
            <div>
              <div className={`${styles['checked-group']}`}>
                <input
                  className={`${styles['checked-box']}`}
                  type="checkbox"
                  value=""
                  id="all-check"
                  onChange={handleSelectAllChange}
                  checked={selectedAreas.length === areas.length}
                />
                <label
                  className={`${styles['checked-text']} mx-3 my-3`}
                  htmlFor="all-check"
                >
                  全部勾選
                </label>
              </div>
              <div className={`${styles['checked-group-container']}`}>
                {areas.length > 0 ? (
                  areas.map((area, index) => (
                    <div key={index} className={`${styles['checked-group']}`}>
                      <input
                        className={`${styles['checked-box']}`}
                        type="checkbox"
                        value={area}
                        id={`area-${index}`}
                        onChange={handleAreaChange}
                        checked={selectedAreas.includes(area)}
                      />
                      <label
                        className={`${styles['checked-text']} ms-3 my-3`}
                        htmlFor={`area-${index}`}
                      >
                        {area}
                      </label>
                    </div>
                  ))
                ) : (
                  <div className={`${styles['checked-group']}`}>
                    <input
                      className={`${styles['checked-box']}`}
                      type="checkbox"
                      id="empty-checkbox"
                      disabled
                    />
                    <label
                      className={`${styles['checked-text']} ms-3 my-3`}
                      htmlFor="empty-checkbox"
                    >
                      沒有地區資料
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`${styles['image']} col-md-5 d-none d-xl-block`}>
            <img src="/bike.png" alt="nav-logo" />
          </div>
        </div>

        {/* 表格部分 */}
        <div>
          <table className={`${styles['table']} table table-striped`}>
            <thead>
              <tr>
                <th scope="col">縣市</th>
                <th scope="col">區域</th>
                <th scope="col">站點名稱</th>
                <th scope="col">可借車輛</th>
                <th scope="col">可還空位</th>
              </tr>
            </thead>
            <tbody>
              {stationData
                .filter(
                  (item) =>
                    (!selectedCity || selectedAreas.includes(item.sarea)) &&
                    item.sna.includes(searchQuery),
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{selectedCity}</td>
                    <td>{item.sarea}</td>
                    <td>{item.sna}</td>
                    <td>{item.sbi}</td>
                    <td>{item.bemp}</td>
                  </tr>
                ))}
              {stationData.filter(
                (item) =>
                  (!selectedCity || selectedAreas.includes(item.sarea)) &&
                  item.sna.includes(searchQuery),
              ).length === 0 && (
                <tr>
                  <td colSpan="5" className={`${styles['title']} mx-2`}>
                    所篩選資料為空
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
