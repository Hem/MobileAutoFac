using ImplantChoice.Business.Contracts;
using System;

namespace ImplantChoice.Business.SomeRules
{
    public class RuleB : ISomeRule
    {
        internal const string Name = "RuleB";
        public void Execute()
        {
            Console.WriteLine("RuleB");
        }
    }
}