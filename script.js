function timMinMax(ds)
{
	n=ds.length;
	for(i = 0;i<n;i++)
	{
		ds = ds.replace(" ","");
	}
	txtDaySo.value = ds;
	n=ds.length;
	min = Number(ds[0]);
	for(i = 0;i<n;i++)
	{
		if (Number(ds[i])<min)
			min = Number(ds[i]);
	}
	txtMin.value = min;
	max = Number(ds[0]);
	for(i = 0;i<n;i++)
	{
		if (Number(ds[i])>max)
			max = Number(ds[i]);
	}
	txtMax.value = max;
}