using ImplantChoice.Business.Contracts;
using System;

namespace ImplantChoice.Business.SomeRules
{
    public class RuleA : ISomeRule
    {
        internal const string Name = "RuleA";
        public void Execute()
        {
            Console.WriteLine("RuleA");
        }
    }
}
