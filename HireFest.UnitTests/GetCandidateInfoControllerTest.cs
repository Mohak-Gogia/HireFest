using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;
using HireFest.Controllers;
using System.Collections.Generic;
using System.Linq;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class GetCandidateInfoControllerTest
    {
        [Test]
        public void ReturnValueOf_FetchCandidateInfoFunction_IsNotNull()
        {
            GetCandidateInfoController controller = new GetCandidateInfoController();
            Mock<IFetchService> mockObject = new Mock<IFetchService>();

            Profile data = new Profile
            {
                FName = "Admin",
                LName = "Singh",
                Email = "admin@gmail.com",
                Phoneno = "9888788897"
            };

            mockObject.Setup(m => m.FetchCandidateInfo()).Returns(data);
            var response = controller.GetCandidateInfo();

            Assert.NotNull(response);
        }
    }
}
