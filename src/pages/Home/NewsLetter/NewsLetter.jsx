import Swal from "sweetalert2";

const NewsLetter = () => {
const handleSubscribe=(e)=>{
    e.preventDefault();
    const form  = e.target;
    const subscribe = form.subscribe.value;
    if(subscribe){
        Swal.fire({
            title: "Success!",
            text: "Subscribe Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
    }

}
    return (
        <div className="mb">
            <footer className="footer p-10 bg-base-200 text-base-content">
  <form onSubmit={handleSubscribe}>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="email" name="subscribe" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button  className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default NewsLetter;