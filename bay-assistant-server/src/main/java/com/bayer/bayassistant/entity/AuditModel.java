
package com.bayer.bayassistant.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.io.Serializable;
import java.util.Date;


@MappedSuperclass
public abstract class AuditModel implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "MARK_FOR_DELETE", length = 1)
	private Boolean markForDelete;

	@Column(name = "CREATE_BY", updatable = false, length = 40)
	private String createdBy;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_DATE", updatable = false)
	private Date createdDate;

	@Column(name = "UPDATE_BY", length = 40)
	private String updatedBy;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "UPDATE_DATE")
	private Date updatedDate;

	public Boolean getMarkForDelete() {
		return markForDelete;
	}

	public void setMarkForDelete(Boolean markForDelete) {
		this.markForDelete = markForDelete;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createBy) {
		this.createdBy = createBy;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createDate) {
		this.createdDate = createDate;
	}

	public String getUpdatedBy() {
		return this.updatedBy;
	}

	public void setUpdatedBy(String updateBy) {
		this.updatedBy = updateBy;
	}

	public Date getUpdatedDate() {
		return this.updatedDate;
	}

	public void setUpdatedDate(Date updateDate) {
		this.updatedDate = updateDate;
	}
}
