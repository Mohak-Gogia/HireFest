using HireFest.DAL.Models.Models;
using HireFestDAL.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HireFest.Services
{
    public interface IAuthService
    {
        int LoginUser(Register acc);
        void SignupUser(Register acc);
    }

    public class AuthService : IAuthService
    {
        public int LoginUser(Register acc)
        {
            DBOperations _operations = new DBOperations();
            return _operations.Login(acc);
        }

        public void SignupUser(Register acc)
        {
            DBOperations _operations = new DBOperations();
            _operations.Signup(acc);
        }
    }
}