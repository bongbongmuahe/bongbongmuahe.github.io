function timMinMax(ds)
{
	// n=ds.length;
	// for(i = 0;i<n;i++)
	// {
		// ds = ds.replace("  "," ");
	// }
	// n=ds.length;
	// for(i = 0;i<n;i++)
	// {
		// ds = ds.replace(" ",",");
	// }
	// txtDaySo.value = ds;
	// n=ds.length;
	var list = ds.split(" ")
	min = Number(list[0]);
	for (i=0;i<list.length;i++)
	{
		if (min>Number(list[i]))
			min = Number(list[i]);
	}
	txtMin.value = min;
}
