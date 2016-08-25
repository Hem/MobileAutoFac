using ImplantChoice.Business.Contracts;
using System;
using System.Threading.Tasks;

namespace ImplantChoice.Business.SomeRules
{
    public class RuleA : ISomeRule
    {
        internal const string Name = "RuleA";
        public Task<int> Execute()
        {
            Console.WriteLine("RuleA");

            return Task.FromResult(1);
        }
    }
}
