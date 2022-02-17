const deleteLink = id => {
    fetch('/' + id, { method: 'DELETE' }).then(res => {
        if(res.status == 200){
            res.text().then(linkId => {
                document.getElementById(linkId).remove();
                alert('Link deleted successfully');
            });
        }else{
            res.json().then(err => alert(err.message));
        };
    });
};