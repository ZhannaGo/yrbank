function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="Your Bank"
      title="Welcome to your bank"
      text="You can move around using the navigation bar."
      body={(<img src="banky.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
