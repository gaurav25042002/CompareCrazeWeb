import React from 'react';
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const formatKey = (key) => {
    // Replace underscores with spaces and capitalize each word
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};
const CompareLaptops = ({ CompareData }) => {

    const keys = Object.keys(CompareData[0]).filter(key => key !== 'imageUrl');
  return (
    <div>
      {CompareData.length > 0 && (
        <MDBContainer className="py-5">
          <MDBTable
            responsive
            striped
            className="text-successtable-border border-light"
          >
            <MDBTableHead className="border-light">
              <tr>
                <th scope="col"></th>
                {CompareData.map((laptop, index) => (
                  <th key={index} scope="col">
                    <img
                      src={laptop.imageUrl}
                      alt={`${laptop.brand} ${laptop.series}`}
                      className="mx-auto h-40"
                    />
                    <h5 className='my-2 text-center font-bold'>{`${laptop.brand} ${laptop.series}`}</h5>
                  </th>
                ))}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {/* Mapping through each laptop data field to display */}
              {keys.map((key, index) => (
                <tr key={index}>
                  <th scope="row" className='text-lg font-bold'>{formatKey(key)}</th>
                  {CompareData.map((laptop, idx) => (
                    <td key={idx} className='text-center'>
                      {/* Checking if the current field is an object, if so, display nested properties */}
                      {typeof laptop[key] === 'object' ? (
                        Object.keys(laptop[key]).map((nestedKey, i) => (
                         <div className='flex justify-center'>
                            <p key={i} className='font-bold'>{`${formatKey(nestedKey)}: `}</p>
                             &nbsp; &nbsp;
                            <p>{`${laptop[key][nestedKey]}`}</p>
                         </div>
                        ))
                      ) : (
                        <p>{laptop[key]}</p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      )}
    </div>
  );
};

export default CompareLaptops;
