using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;

namespace HireFest.UnitTests
{
    [TestFixture]
    public class HashingServiceTest
    {
        [Test]
        public void HashingService_ReturnsAString()
        {
            //Arrange
            var service = new HashingService();

            //Act
            var result = service.passwordHashing("password");

            //Assert
            Assert.IsNotNull(result);
            Assert.That(result, Is.InstanceOf<String>());
        }
    }   
}
