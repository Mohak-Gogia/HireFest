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
    public class GetAssessmentInfoControllerTest
    {
        [Test]
        public void ReturnValueOf_FetchAssessmentInfoFunction_IsNotNull()
        {
            GetAssessmentInfoController controller = new GetAssessmentInfoController();
            Mock<IFetchService> mockObject = new Mock<IFetchService>();

            List<AssessmentInformation> data = new List<AssessmentInformation>()
            {
                new AssessmentInformation()
                {
                    AssessmentId = 1,
                    Title = "Test",
                    Topics = "abc",
                    Description = "xyz",
                    Time = 1,
                    Score = 2
                },
                new AssessmentInformation()
                {
                    AssessmentId = 2,
                    Title = "Test",
                    Topics = "abc",
                    Description = "xyz",
                    Time = 3,
                    Score = 4
                }
            };


            mockObject.Setup(m => m.FetchAssessmentInfo()).Returns(data);
            var response = controller.GetAssessmentInfo();

            Assert.NotNull(response);
            Assert.AreEqual(2, response.Count());
        }
    }
}
