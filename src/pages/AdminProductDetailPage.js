import AdminProductDetail from "../features/admin/components/AdminProductDetail"; //productdetails
import NavBar from "../features/navbar/Navbar";
function AdminProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <AdminProductDetail></AdminProductDetail>
            </NavBar>
        </div>
     );
}

export default AdminProductDetailPage;
