using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class AuthServiceTest
    {
        [Test]
        public void ReturnValueOf_LoginFunction_IsNotNullAndTrue()
        {
            Register r = new Register
            {
                Email = "admin@gmail.com",
                Password = "fCIvspJ9goryL1khNOiTJIBjfA0="
            };

            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.Login(r)).Returns(1);

            AuthService service = new AuthService();
            int response = service.LoginUser(r);

            Assert.NotNull(response);
            Assert.AreEqual(1, response);
        }

        [Test]
        [Ignore("Skip")]
        public void ReturnValueOf_SignupFunction_IsNotNullAndTrue()
        {
            Register r = new Register
            {
                FName = "Test",
                LName = "test",
                Phoneno = "9032323921",
                Email = "test@gmail.com",
                Password = "fCIvspJ9goryL1khNOiTJIBjfA0="
            };

            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.Signup(r));

            //AuthService service = new AuthService();
            //service.SignupUser(r);

            db.Verify(m => m.Signup(r), Times.AtLeastOnce());
        }
    }
}
