using ImplantChoice.Business.Contracts;
using System;
using System.Threading.Tasks;

namespace ImplantChoice.Business.SomeRules
{
    public class RuleB : ISomeRule
    {
        internal const string Name = "RuleB";
        
        public Task<int> Execute()
        {
            Console.WriteLine("RuleB");

            return Task.FromResult(1);
        }
    }
}