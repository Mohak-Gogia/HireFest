using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;
using HireFest.Controllers;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class LoginControllerTest
    {
        [Test]
        public void ReturnValueOf_LoginUserFunction_IsNotNull()
        {
            LoginController controller = new LoginController();
            Mock<IAuthService> mockObject = new Mock<IAuthService>();

            Register data = new Register
            {
                Email = "admin@gmail.com",
                Password = "test@1212"
            };

            mockObject.Setup(m => m.LoginUser(data)).Returns(1);
            var response = controller.Post(data);

            Assert.NotNull(response);
        }
    }
}
