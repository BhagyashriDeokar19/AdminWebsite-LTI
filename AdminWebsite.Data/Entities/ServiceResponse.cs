using System;
using System.Collections.Generic;
using System.Text;

namespace AdminWebsite.Data.Entities
{
    public class ServiceResponse
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }

    }
}
