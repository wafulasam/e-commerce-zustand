import styled from "styled-components";

const TablePreloader = () => {
    const loaders = [];
    for (let i = 0; i < 5; i++) {
        loaders.push(
            <div key={i} className="loader-row">
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
            </div>
        );
    }
    return (
        <TableLoaderStyles>
            {loaders}
        </TableLoaderStyles>
    );
}

const TableLoaderStyles = styled.div`
    .loader-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;

        .loader {
            flex: 1;
            padding: 10px;
            margin-top: 0px;
            margin-bottom: 10px;
            animation: pulse 0.75s linear alternate infinite;
        }

        @keyframes pulse {
            0% {
                background-color: #fff;
            }
            100% {
                background-color: #ddd;
            }
        }
    }
`

export default TablePreloader;