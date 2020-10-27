import React from 'react';

function ErrorScreen() {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="error">
            <h1>Something went wrong</h1>
            <p>Click <span onClick={refreshPage} className="page-refresh">here</span> to try again</p>
        </div>
    );
}

export default ErrorScreen;